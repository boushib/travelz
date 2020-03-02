const express = require('express')
const fs = require('fs')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use((req, res, next) => {
  console.log('hello from inside a middleware! 👋')
  next()
})

const locations = fs.readFileSync(`${__dirname}/data/locations.json`, 'utf-8')
const locationsObj = JSON.parse(locations)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome to travelz!' })
})

const getLocations = (req, res) => {
  res.status(200).send({
    status: "success",
    results: locationsObj.length,
    data: { locations: locationsObj }
  })
}
const getLocation = (req, res) => {
  const location = locationsObj.find(location => location._id === +req.params.id)
  if (!location) return res.status(404).json({ status: "error", message: "Location not found!" })
  res.status(200).send({
    status: "success",
    data: { location }
  })
}
const updateLocation = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "location updated successfuly!"
  })
}
const deleteLocation = (req, res) => {
  res.json({
    status: "success",
    message: "location deleted successfuly!"
  })
}
const createLocation = (req, res) => {
  const id = locationsObj[locationsObj.length - 1]._id + 1
  const location = { _id: id, ...req.body }
  locationsObj.push(location)
  fs.writeFile(`${__dirname}/data/locations.json`, JSON.stringify(locationsObj), err => {
    if (err) return console.log(err)
    res.status(201).json({ message: 'Location successfuly created!', data: location })
  })
}

const getUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      user: []
    }
  })
}
const createUser = (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      message: "User created successfuly!"
    }
  })
}
const updateUser = (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      message: "User updated successfuly!"
    }
  })
}
const deleteUser = (req, res) => {
  res.json({
    status: "success",
    data: {
      message: "User successfully deleted!"
    }
  })
}

const userRouter = express.Router()
const locationRouter = express.Router()

userRouter.route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser)
userRouter.route('/')
  .post(createUser)

locationRouter.route('/')
  .get(getLocations)
  .post(createLocation)
locationRouter.route('/:id')
  .get(getLocation)
  .patch(updateLocation)
  .delete(deleteLocation)

app.use('/api/v1/users', userRouter)
app.use('/api/v1/locations', locationRouter)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`app running on port ${port}`)
})