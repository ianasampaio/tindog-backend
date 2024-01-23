const { Router } = require("express");
const router = Router();
const AuthenticationController = require('../app/controllers/AuthenticationController');

router.post('/signup', AuthenticationController.signup);
router.post('/signin', AuthenticationController.signin);

module.exports = router;
