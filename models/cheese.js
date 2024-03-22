const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cheeseSchema = new mongoose.Schema(
	{
		title: { type: String, required: [true, 'Title is required'] },
		seller: { type: String, required: [true, 'Seller is required'] },
		condition: { type: String, required: [true, 'Condition is required'] },
		price: { type: Number, required: [true, 'Price is required'] },
		details: { type: String, required: [true, 'Details are required'], minlength: 250 },
		image: { type: String, required: [true, 'Image is required'] },
		totalOffers: { type: Number, required: [true, 'Total offers is required'], default: 0 },
		active: { type: Boolean, required: [true, 'Active status is required'], default: true },
	},
	{
		timestamps: true,
	}
);

// collection name is cheese in the db
module.exports = mongoose.model('nbda-project3.cheeses', cheeseSchema);

exports.find = () => {
	return cheeses;
};

exports.findAscending = () => {
	return cheeses.sort((a, b) => a.price - b.price);
};

exports.findById = (id) => {
	return cheeses.find((cheese) => cheese.id === id);
};

exports.save = (cheese) => {
	cheese.id = uuidv4();
	cheese.totalOffers = 0;
	cheese.active = true;
	cheeses.push(cheese);
};

exports.deleteById = (id) => {
	let index = cheeses.findIndex((cheese) => cheese.id === id);
	if (index !== -1) {
		cheeses.splice(index, 1);
		return true;
	} else {
		return false;
	}
};

exports.updateById = (id, newCheese) => {
	let cheese = cheeses.find((cheese) => cheese.id === id);
	if (cheese) {
		cheese.title = newCheese.title;
		cheese.condition = newCheese.condition;
		cheese.price = newCheese.price;
		cheese.seller = newCheese.seller;
		cheese.details = newCheese.details;
		if (newCheese.image) {
			cheese.image = newCheese.image;
		}
		return true;
	} else {
		return false;
	}
};

exports.search = (query) => {
	query = query.toLowerCase();
	return cheeses.filter((cheese) => {
		return cheese.title.toLowerCase().includes(query) || cheese.details.toLowerCase().includes(query);
	});
};
