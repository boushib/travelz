const Location = require('../models/location')

exports.getLocations = async (req, res) => {
  try {
    const data = await Location.find()
    res.status(200)
      .json({
        status: 'success',
        results: data.length,
        data: data
      })
  } catch (err) {
    res.json({
      status: 'error',
      message: err
    })
  }
}
exports.getLocation = async (req, res) => {
  try {
    const data = await Location.findById(req.params.id)
    res.status(200).json({ status: "success", data })
  } catch (err) {
    res.json({
      status: 'error',
      message: err
    })
  }
}
exports.createLocation = async (req, res) => {
  try {
    const data = await Location.create(req.body)
    res.json({ status: "success", data })
  } catch (err) {
    res.json({ status: "error", message: err })
    console.log(err)
  }
}
exports.updateLocation = async (req, res) => {
  try {
    const data = await Location.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(201).json({status: "success", data})
  }
  catch(err){
    res.json({status: "error", message: err})
  }
}
exports.deleteLocation = (req, res) => {
  res.json({
    status: "success",
    message: "location deleted successfuly!"
  })
}