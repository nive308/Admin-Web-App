const express = require('express')
const router = express.Router()

const  {authenticateUser}  = require('../app/middlewares/authentication')
const userController = require('../app/controllers/userController')

router.post('/users/register', userController.register)
router.post('/users/login', userController.login)
router.get('/users/account', authenticateUser, userController.account)
router.delete('/users/logout', userController.logout)

module.exports = router