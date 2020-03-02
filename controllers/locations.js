const fs = require('fs')

const locations = fs.readFileSync(`${__dirname}/../data/locations.json`, 'utf-8')
const locationsObj = JSON.parse(locations)

exports.getLocations = (req, res) => {
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
exports.createLocation = (req, res) => {
  const id = locationsObj[locationsObj.length - 1]._id + 1
  const location = { _id: id, ...req.body }
  locationsObj.push(location)
  fs.writeFile(`${__dirname}/data/locations.json`, JSON.stringify(locationsObj), err => {
    if (err) return console.log(err)
    res.status(201).json({ message: 'Location successfuly created!', data: location })
  })
}