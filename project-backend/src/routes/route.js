const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/users', UserController.list);
router.post('/users', UserController.create);
router.get('/users/:id', UserController.get);
router.post('/users/:id',UserController.update);
router.delete('/users/:id', UserController.delete);
module.exports = router;