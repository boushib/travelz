const express = require('express')
const fs = require('fs')
require('dotenv').config()

const app = express()
app.use(express.json())

const locations = fs.readFileSync(`${__dirname}/data/locations.json`, 'utf-8')
const locationsObj = JSON.parse(locations)

app.get('/', (req, res) => {
  res.status(200).json({message: 'welcome to travelz!'})
})

app.get('/api/v1/locations', (req, res) => {
  res.status(200).send({
    status: "success",
    results: locationsObj.length,
    data: {locations: locationsObj}
  })
})
app.get('/api/v1/locations/:id', (req, res) => {
  const location = locationsObj.find(location => location._id === +req.params.id)
  res.status(200).send({
    status: "success",
    data: {location}
  })
})
app.post('/api/v1/locations', (req, res) => {
  const id = locationsObj[locationsObj.length - 1]._id + 1
  const location = {_id: id, ...req.body}
  locationsObj.push(location)
  fs.writeFile(`${__dirname}/data/locations.json`, JSON.stringify(locationsObj), err => {
    if(err) return console.log(err)
    res.status(201).json({message: 'Location successfuly created!', data: location})
  })
})

const port = process.env.PORT
app.listen(port, ()=> {
  console.log(`app running on port ${port}`)
})