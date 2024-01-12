const { Router } = require("express");
const router = Router();
const UserController = require('./app/controllers/UserController');
const AuthenticationController = require('./app/controllers/AuthenticationController');
const authMiddleware = require('./app/middlewares/authMiddleware');
// router.use(authMiddleware.authenticate);


router.get('/users',authMiddleware.authenticate, UserController.index);
router.post('/users', UserController.store);
router.get('/users/:id', UserController.show);


router.post('/auth/signup', AuthenticationController.signup);
router.post('/auth/signin', AuthenticationController.signin);

module.exports = router;
