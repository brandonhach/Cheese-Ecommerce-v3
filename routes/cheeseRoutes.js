const express = require('express');
const controller = require('../controllers/cheeseController');

const router = express.Router();

/**GET /items: send all cheese listing to the user */
router.get('/listing', controller.index);

/**GET /search: get matching cheese */
router.get('/listing', controller.index);

/**GET /item/:id : send details of cheese identified by id */
router.get('/item/:id', controller.item);

module.exports = router;
