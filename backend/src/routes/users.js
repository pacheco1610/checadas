const {Router} = require('express')
const router = Router()

const {getUsers,createUser,deleteUser,User}=require('../controllers/users.controllers')

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(User)
    .delete(deleteUser)

module.exports = router