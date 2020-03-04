const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(con => console.log("DB connected successfuly!"))
  .catch(err => console.log("ERROR: ", err))

const app = require('./app')
const port = process.env.PORT

app.listen(port, () => {
  console.log(`app running on port ${port}`)
})