const model = require('../models/cheese');

/**GET /items: send all cheese listing to the user */
exports.index = (req, res) => {
	let cheeses = model.findAscending();
	res.render('./cheese/items', { cheeses });
};

/**GET /item/:id : send details of cheese identified by id */
exports.item = (req, res, next) => {
	let id = req.params.id;
	let cheese = model.findById(id);
	try {
		if (cheese) {
			return res.render('./cheese/item', { cheese });
		} else {
			let err = new Error('Cannot find cheese with id ' + id);
			err.status = 404;
			next(err);
		}
	} catch (error) {
		console.log('Failed to create cheese listing:', error);
		next(error);
	}
};

/**POST /post_cheese : create a new cheese listing */
exports.create = (req, res, next) => {
	let cheese = req.body;
	try {
		cheese.image = '/images/uploads/' + req.file.filename;
		model.save(cheese);
		res.redirect('/listing');
	} catch (error) {
		console.log('Failed to create cheese listing:', error);
		next(error);
	}
};

/**GET /new : create a new cheese listing */
exports.new = (req, res) => {
	res.render('./cheese/new');
};

/**DELETE /item/:id : delete a cheese listing */
exports.delete = (req, res, next) => {
	let id = req.params.id;
	try {
		if (model.deleteById(id)) {
			res.redirect('/listing');
		} else {
			let err = new Error('Cannot delete cheese with id ' + id);
			err.status = 404;
			next(err);
		}
	} catch (error) {
		console.error('Failed to delete cheese listing:', error);
		next(error);
	}
};

/**UPDATE /item/:id : update a cheese listing */
exports.update = (req, res, next) => {
	let id = req.params.id;
	let updatedCheese = {
		title: req.body.title,
		condition: req.body.condition,
		price: req.body.price,
		seller: req.body.seller,
		details: req.body.details,
	};

	try {
		if (req.file) {
			updatedCheese.image = '/images/uploads/' + req.file.filename;
		}

		if (model.updateById(id, updatedCheese)) {
			res.redirect('/listing/item/' + id);
		}
	} catch (error) {
		console.error('Failed to update cheese listing:', error);
		next(error);
	}
};

/**GET /item/:id/edit : create a new cheese listing */
exports.edit = (req, res, next) => {
	let id = req.params.id;
	let cheese = model.findById(id);
	try {
		if (cheese) {
			res.render('./cheese/edit', { cheese });
		} else {
			let err = new Error('Cannot find a cheese with id ' + id);
			err.status = 404;
			next(err);
		}
	} catch (error) {
		console.error('Failed to edit cheese listing:', error);
		next(error);
	}
};

/**GET /item/:id : search for cheese listing via title and/or detail field (case-sens) */
exports.search = (req, res, next) => {
	const query = req.query.searchBar;
	try {
		if (query) {
			console.log(query);
			const cheeses = model.search(query);
			res.render('./cheese/items', { cheeses });
		} else {
			const cheeses = 0;
			res.render('./cheese/items', { cheeses });
		}
	} catch (error) {
		console.error('An error occurred during the search.', error);
		next(error);
	}
};
