const { Router } = require('express');

const router = Router();
const PostController = require('../app/controllers/PostController');

router.get('/', PostController.index);
router.post('/', PostController.store);

module.exports = router;