const express = require('express')
const userRouter = require('./routes/users')
const locationRouter = require('./routes/locations')
// mongodb+srv://admin:vkiACQFDG2efNJnn@cluster0-tniud.mongodb.net/test
// mongodb://admin:vkiACQFDG2efNJnn@cluster0-shard-00-00-tniud.mongodb.net:27017,cluster0-shard-00-01-tniud.mongodb.net:27017,cluster0-shard-00-02-tniud.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin
const app = express()
app.use(express.json())
app.use(express.static(`${__dirname}/public`))
// app.use((req, res, next) => {
//   console.log('hello from inside a middleware! 👋')
//   next()
// })

app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome to travelz!' })
})

// mounting routes
app.use('/api/v1/users', userRouter)
app.use('/api/v1/locations', locationRouter)

module.exports = app