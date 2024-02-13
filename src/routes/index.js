const { Router } = require('express');

const router = Router();
const authMiddleware = require('../app/middlewares/AuthMiddleware');
const AuthRouter = require('./Auth');
const UsersRouter = require('./Users');
const DogsRouter = require('./Dogs');

router.use('/auth', AuthRouter);
router.use('/users', authMiddleware.authenticate, UsersRouter);
router.use('/dogs', authMiddleware.authenticate, DogsRouter);

module.exports = router;
