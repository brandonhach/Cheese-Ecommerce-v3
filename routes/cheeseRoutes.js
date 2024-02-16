const express = require('express');
const controller = require('../controllers/cheeseController');
const router = express.Router();
const { upload } = require('../middleware/fileUpload');

// route off of /listing/...

/**GET /items: send all cheese listing to the user */
router.get('/', controller.index);

/**GET /item/:id : send details of cheese identified by id */
router.get('/item/:id', controller.item);

/**POST /post_cheese : create a new cheese listing */
router.post('/post_cheese', upload, controller.create);

/**GET /new: display create cheese form */
router.get('/new', controller.new);

/**GET /item/:id/edit : send html form for editing an existing cheese */
router.get('/item/:id/edit', controller.edit);

// /**PUT /item/:id : update a cheese listing */
router.put('/item/:id/edit/update', upload, controller.update);

/**DELETE /item/:id : delete the cheese identified by id */
router.delete('/item/:id', controller.delete);

/**GET /item/:id : search for cheese listing via title and/or detail field (case-sens) */
router.get('/search', controller.search);

module.exports = router;
