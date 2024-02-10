const model = require('../models/cheese');

/**GET /items: send all cheese listing to the user */
exports.index = (req, res) => {
	let cheeses = model.findAscending();
	res.render('./cheese/items', { cheeses });
};

/**GET /item/:id : send details of cheese identified by id */
exports.item = (req, res) => {
	let id = req.params.id;
	let cheese = model.findById(id);
	if (cheese) {
		return res.render('./cheese/item', { cheese });
	}
	// If the cheese is not found, then send a 404 error.
	let err = new Error('Cannot find cheese with id ' + id);
	err.status = 404;
	next(err);
};

/**GET /search: get matching cheese */
exports.search = (req, res) => {
	let id = req.params.id;
	let cheese = model.findById(id);

	if (cheese) {
		res.render('./cheese/search', { cheese });
	}
	let err = new Error('Cannot find cheese');
	err.status = 404;
	next(err);
};

/**POST /cheese : create a new cheese listing */
exports.create = (req, res) => {
	let cheese = req.body;
	try {
		if (req.file) {
			cheese.image = '/images/listing_pic/' + req.image;
		}
		model.save(cheese);
		res.redirect('./listing');
	} catch (error) {
		console.log('Failed to create cheese listing:', error);
		res.status(500);
	}
};

exports.new = (req, res) => {
	res.render('./cheese/new');
};
