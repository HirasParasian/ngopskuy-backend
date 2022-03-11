const route = require('express').Router();
const responseHandler = require('../helpers/responseHandler');

route.use('/promo', require('./promo'));
route.use('/auth', require('./auth'));
route.use('/user', require('./user'));
route.use('/upload', require('./upload'));
route.use('/productSize', require('./productSize'));

route.get('/', (req, res) => responseHandler(res, 200, 'Backend is running well!'));

module.exports = route;
