const { Router } = require('express');

const Employer = require('./controller/employer');

const routes = new Router();

routes.get('/api/funcionarios', Employer);

module.exports = routes;
