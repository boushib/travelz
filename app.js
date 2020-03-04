const express = require('express')
const userRouter = require('./routes/users')
const locationRouter = require('./routes/locations')

const app = express()
app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome to travelz!' })
})

// mounting routes
app.use('/api/v1/users', userRouter)
app.use('/api/v1/locations', locationRouter)

module.exports = app