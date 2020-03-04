const Location = require('../models/location')

exports.getLocations = (req, res) => {
  // get locations from db
  res.status(200).send({
    status: "success",
    results: locationsObj.length,
    data: { locations: locationsObj }
  })
}
exports.getLocation = (req, res) => {
  const location = locationsObj.find(location => location._id === +req.params.id)
  if (!location) return res.status(404).json({ status: "error", message: "Location not found!" })
  res.status(200).send({
    status: "success",
    data: { location }
  })
}
exports.createLocation = async (req, res) => {
  try {
    const data = await Location.create(req.body)
    res.json({ status: "success", data })
  } catch(err){
    res.json({ status: "error", message: err })
    console.log(err)
  }
}
exports.updateLocation = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "location updated successfuly!"
  })
}
exports.deleteLocation = (req, res) => {
  res.json({
    status: "success",
    message: "location deleted successfuly!"
  })
}