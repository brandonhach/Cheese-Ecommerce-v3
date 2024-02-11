const express = require('express');
const controller = require('../controllers/cheeseController');
const router = express.Router();
const { upload } = require('../middleware/fileUpload');

/**GET /items: send all cheese listing to the user */
router.get('/', controller.index);

/**GET /item/:id : send details of cheese identified by id */
router.get('/item/:id', controller.item);

/**POST /cheese : create a new cheese listing */
router.post('/post_cheese', upload, controller.create);

/**GET /new: display create cheese form */
router.get('/new', controller.new);

// /**GET /cheese/:id/edit : send html form for editing an existing cheese */
// router.get('/:id/edit', controller.edit);

// /**PUT /cheese : create a new cheese listing */
// router.put('/id', controller.update);

// /**DELETE /cheese : delete the cheese identified by id */
// router.delete('/:id', controller.delete);

module.exports = router;
