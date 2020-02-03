const express=require('express')
const router=express.Router()

const userController=require('../app/controller/userController')

const companyController=require('../app/controller/companyController')

const taskController=require('../app/controller/taskController')


//@user API

router.get('/users',userController.list) //Get all the users
router.get('/users/:id',userController.show) //Get user by id
router.post('/users',userController.create) //Create a user
router.put('/users/:id',userController.update) //Updating a user
router.delete('/users/:id',userController.destroy) //Deleting a user

//@companies API

router.get('/companies',companyController.list)

//@Task API

router.get('/tasks',taskController.list)
router.post('/tasks',taskController.create)


module.exports=router