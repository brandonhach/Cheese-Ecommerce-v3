const express = require('express');
const morgan = require('morgan');

const app = express();

let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('tiny'));

app.use((err, req, res, next) => {
	if (!err.status) {
		err.status = 500;
		err.message = 'Internal Server Error';
	}
	res.status(err.status);
	res.render('error', { error: err });
});

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(port, host, () => {
	console.log('Server is running on port', port);
});
