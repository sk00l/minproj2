import express from 'express'
const router = express.Router()

import { authUser, userAuth } from '../controllers/userController.js'

router.post('/login', authUser)

export default router
