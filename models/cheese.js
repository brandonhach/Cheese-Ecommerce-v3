const { v4: uuidv4 } = require('uuid');

const cheeses = [
	{
		id: '1',
		title: 'Obsidian Aged Parmesan',
		seller: 'Giovanni Ferro',
		condition: 'Mild',
		price: 49.99,
		details:
			'A delightful journey into the world of mild cheeses, our Obsidian Aged Parmesan is a subtle blend of creamy texture and nuanced flavors, perfect for both connoisseurs and casual enjoyers alike.',
		image: '/images/items/item-1.png',
		totalOffers: 0,
		active: true,
	},
	{
		id: '2',
		title: 'Velvet Royale Cheese',
		seller: 'Isabella D’Este',
		condition: 'Matured',
		price: 129.99,
		details:
			'Velvet Royale Cheese, matured to perfection, offers a rich and complex taste profile. Its velvety texture and depth of flavor make it a luxurious addition to any cheese board.',
		image: '/images/items/item-2.png',
		totalOffers: 0,
		active: true,
	},
	{
		id: '3',
		title: 'Noir Stamped Reserved',
		seller: 'Marco Polo',
		condition: 'Aged',
		price: 99.99,
		details:
			'Experience the bold and distinctive flavors of Noir Stamped Reserved. Aged to excellence, this cheese brings a unique character to your palate, ideal for those who appreciate a strong, memorable taste.',
		image: '/images/items/item-3.png',
		totalOffers: 0,
		active: true,
	},
	{
		id: '4',
		title: 'Elegance Brie Cheese',
		seller: 'Leonardo da Vinci',
		condition: 'Extra-Aged',
		price: 189.99,
		details: `Indulge in the essence of luxury and elegance with this extraordinary Brie cheese. Crafted to perfection and aged to the finest degree, it's a true masterpiece for connoisseurs.`,
		image: '/images/items/item-4.png',
		totalOffers: 0,
		active: true,
	},
	{
		id: '5',
		title: 'Imperial Vintage Pecorino',
		seller: 'Caterina Sforza',
		condition: 'Vintage',
		price: 239.99,
		details:
			'Imperial Vintage Pecorino is a testament to the art of cheese-making. Its vintage character is a homage to tradition, offering a taste that is both profound and timeless.',
		image: '/images/items/item-5.png',
		totalOffers: 0,
		active: true,
	},
	{
		id: '6',
		title: 'Supreme Heritage Fiscalini',
		seller: 'Lucrezia Borgia',
		condition: 'Vintage',
		price: 479.99,
		details:
			'Supreme Heritage Fiscalini is the epitome of luxury in the cheese world. With its unrivaled quality and vintage heritage, it offers an unparalleled cheese experience for the most discerning palates.',
		image: '/images/items/item-6.png',
		totalOffers: 0,
		active: true,
	},
];

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
