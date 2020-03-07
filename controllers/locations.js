const Location = require('../models/location')

exports.getLocations = async (req, res) => {
  try {
    const excluded = ['page', 'sort', 'limit']
    let query = {...req.query}
    excluded.forEach(el => delete query[el]) 
    query = JSON.stringify(query)
    query = JSON.parse(query.replace(/\b(gt|gte|lt|lte)\b/g, str => `$${str}`))
    const data = await Location.find(query)
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
    const data = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(201).json({ status: "success", data })
  }
  catch (err) {
    res.json({ status: "error", message: err })
  }
}
exports.deleteLocation = async (req, res) => {
  try {
    const data = await Location.findByIdAndDelete(req.params.id)
    res.json({
      status: "success",
      message: "location deleted successfuly!"
    })
  } catch(err){
    res.json({status: 'error', message: err})
  }
}