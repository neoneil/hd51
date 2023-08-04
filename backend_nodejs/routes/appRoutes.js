const express = require('express');
const router = express.Router();
const User_controllers = require('../controllers/users_controller')
const Process_controllers = require('../controllers/process_homework_controller')
router.get('/users', User_controllers.Users);
router.get('/user/:id', User_controllers.One_user)
router.post('/user', User_controllers.Save_user)
router.delete('/deleteUser/:id', User_controllers.Delete_user)
router.patch('/updateUser/:id', User_controllers.Update_user)

router.get('/process/:student_id', Process_controllers.One_process)
router.get('/processes/:student_id', Process_controllers.All_processes_One_student)
router.post('/process', Process_controllers.Save_process)

module.exports = router

