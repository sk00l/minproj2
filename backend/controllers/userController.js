import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc    Auth User and get Token
// @route   POST api/users/login
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  res.send(email, password)
})

export { authUser }
