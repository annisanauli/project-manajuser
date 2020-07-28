const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/users', UserController.list);
router.post('/users', UserController.create);
router.get('/users/:id', UserController.get);
<<<<<<< HEAD
<<<<<<< HEAD
=======
router.post('/users/:id',UserController.update);
>>>>>>> test
=======
router.post('/users/:id',UserController.update);
>>>>>>> test
router.delete('/users/:id', UserController.delete);
module.exports = router;