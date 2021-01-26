// Node package imports
const parser = require('body-parser');
const cors = require('cors');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

// Routers
const createRouter = require('./helpers/create_router');

app.use(cors());
app.use(parser.json());

//establish connection to database
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
	if (err) {
		console.log(err);
	}
	const db = client.db('co2_calculator');
	const questionsCollection = db.collection('questions');
	const questionsRouter = createRouter(questionsCollection);
	app.use('/api/questions', questionsRouter);

	app.listen(3000, function () {
		console.log(`app listening on port ${this.address().port}`);
	});
});
