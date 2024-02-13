const { Router } = require('express');

const router = Router();
const DogController = require('../app/controllers/DogController');

router.post('/', DogController.store);

module.exports = router;
