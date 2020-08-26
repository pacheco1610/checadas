const userCtrl = {}
const UserModels = require('../models/Users')

userCtrl.getUsers = async (req,res)=> {
    const users = await UserModels.find()
    res.json(users)
}
userCtrl.createUser = async (req,res)=> {
    const {username} = req.body
    const newUser= new UserModels({username})
    await newUser.save()
    res.json({messasage: 'Usuario Creado'})
}
userCtrl.User = async (req,res)=> {
    const note = await UserModels.findById(req.params.id)
    res.json(note)
}
userCtrl.deleteUser = async (req,res)=>{
    await UserModels.findByIdAndDelete(req.params.id)
    res.json({messasage: 'Usuario Eliminado'})
}


module.exports =userCtrl