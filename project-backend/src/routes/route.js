const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// router.get('/datatest',EmployeeController.testdata );
router.get('/list', UserController.list);
router.post('/create', UserController.create);


module.exports = router;