exports.getUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      user: []
    }
  })
}
exports.createUser = (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      message: "User created successfuly!"
    }
  })
}
exports.updateUser = (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      message: "User updated successfuly!"
    }
  })
}
exports.deleteUser = (req, res) => {
  res.json({
    status: "success",
    data: {
      message: "User successfully deleted!"
    }
  })
}