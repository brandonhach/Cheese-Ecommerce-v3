const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cheeseSchema = new Schema(
	{
		title: { type: String, required: [true, 'Title is required'] },
		seller: { type: String, required: [true, 'Seller is required'] },
		condition: { type: String, required: [true, 'Condition is required'] },
		price: { type: Number, required: [true, 'Price is required'] },
		details: { type: String, required: [true, 'Details are required'], maxlength: 250 },
		image: { type: String, required: [true, 'Image is required'] },
		totalOffers: { type: Number, required: [true, 'Total offers is required'], default: 0 },
		active: { type: Boolean, required: [true, 'Active status is required'], default: true },
	},
	{
		timestamps: true,
	}
);

// collection name is cheese in the db
module.exports = mongoose.model('Cheese', cheeseSchema);
