require('dotenv').config()
const app = require('./app')
console.log(process.env.NODE_ENV)
const port = process.env.PORT
app.listen(port, () => {
  console.log(`app running on port ${port}`)
})