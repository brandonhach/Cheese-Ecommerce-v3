//require modules
const express = require('express');
const morgan = require('morgan');
const cheeseListingRoutes = require('./routes/cheeseRoutes');

//create app
const app = express();

//config app
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

//mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

//error handling
app.use((err, req, res, next) => {
	if (!err.status) {
		err.status = 500;
		err.message = 'Internal Server Error';
	}
	res.status(err.status);
	res.render('error', { error: err });
});

//set up routes
app.get('/', (req, res) => {
	res.render('index');
});

app.use('/', cheeseListingRoutes);

//listen during startup
app.listen(port, host, () => {
	console.log('Server is running on port', port);
});
