const express = require('express')
const router = express.Router()

const locationConroller = require('../controllers/locations')

router.route('/')
  .get(locationConroller.getLocations)
  .post(locationConroller.createLocation)
router.route('/:id')
  .get(locationConroller.getLocation)
  .patch(locationConroller.updateLocation)
  .delete(locationConroller.deleteLocation)

module.exports = router