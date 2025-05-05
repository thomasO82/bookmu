const userModel = require("../models/userModel")

exports.postUser = async(req,res)=>{
    try {
        const user = new userModel({
            name: req.body.name,
            age : req.body.age,
            email: req.body.email,
            password: req.body.password
        })
        await user.save()
        res.json({message : "user created" , user: user})
      } catch (error) {
        res.json({message : error})
      }
}

exports.getUsers = async (req,res)=>{
    try {
        const users = await userModel.find()
        res.json(users)
    } catch (error) {
        res.json({error : error.message})
    }
}

exports.getUser = async (req,res) =>{
    try {
        const user = await userModel.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.json({error : error.message})
    }
}

exports.putUser = async (req,res)=>{
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id , req.body, {runValidators : true, new: true})
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteUser = async (req,res)=>{
    try {
       await userModel.findByIdAndDelete(req.params.id)
       res.json ({message : "utilisateur bien supprimé"})
    } catch (error) {
        res.json ({message : error.message})

    }
}

