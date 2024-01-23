const { Router } = require("express");
const router = Router();
const UserController = require('../app/controllers/UserController');

router.get('/', UserController.index);
router.get('/:id', UserController.show);

module.exports = router;