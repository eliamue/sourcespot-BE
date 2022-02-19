const express = require('express');
const resourceController = require('./controllers/resources.js');
const app = express();

// Built in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/resources', resourceController);

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
