const userRouter = require("express").Router()
const userModel = require("../models/userModel")
const userController = require("../controllers/userController")

userRouter.post("/users" , userController.postUser)
userRouter.get('/users' , userController.getUsers)
userRouter.get('/users/:id' , userController.getUser)
userRouter.put('/users/:id', userController.putUser)
userRouter.delete('/users/:id', userController.deleteUser )

module.exports = userRouter