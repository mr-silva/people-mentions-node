const { Router } = require('express');
const MentionController = require('./controllers/MentionController');

const routes = Router();

routes.post('/create', MentionController.store);

module.exports = routes;