const express = require('express')
const router = express.Router()

const userConroller = require('../controllers/users')

router.route('/')
  .post(userConroller.createUser)
router.route('/:id')
  .get(userConroller.getUser)
  .patch(userConroller.updateUser)
  .delete(userConroller.deleteUser)

module.exports = router