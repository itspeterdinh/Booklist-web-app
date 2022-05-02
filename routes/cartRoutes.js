const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

router.route('/add/:item').post(cartController.addToCart);
router.route('/get').get(cartController.getCart);
router.route('/update/:item').get(cartController.updateCart);

module.exports = router;
