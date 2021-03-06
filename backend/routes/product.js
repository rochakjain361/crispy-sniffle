const express = require('express');
const router = express.Router();

const { getProducts } = require ('../controllers/productControllers')

router.route('/product').get(getProducts);

module.exports = router;
