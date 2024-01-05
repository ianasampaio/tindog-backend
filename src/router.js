const { Router } = require("express");
const router = Router();

router.get('/', (request, response) => {
  response.send('etc');
});

module.exports = router;
