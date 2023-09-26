//here after /user url is connected to controllers
const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/add-user', userController.AddUser);
router.get('/get-users', userController.GetUsers);
router.delete('/delete-user/:id', userController.DeleteUser);

module.exports = router;