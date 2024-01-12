const { Router } = require("express");
const router = Router();
const authMiddleware = require("../app/middlewares/AuthMiddleware");
const AuthRouter = require("./Auth");
const UsersRouter = require("./Users");

router.use("/auth", AuthRouter);
router.use("/users", authMiddleware.authenticate, UsersRouter);

module.exports = router;
