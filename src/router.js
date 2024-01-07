const { Router } = require("express");
const router = Router();
const UserController = require('./app/controllers/UserController');

router.get('/users', UserController.index);

module.exports = router;
