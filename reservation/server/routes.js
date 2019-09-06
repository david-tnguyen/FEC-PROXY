const controller = require('./controllers');
const router = require('express').Router();

router.get('/checkout', controller.checkout.get);
router.post('/checkout', controller.checkout.post);

module.exports = router;