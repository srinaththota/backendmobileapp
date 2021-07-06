const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.status(200).json({message: 'This is a centralized auth system for synthesis Applications!'});
  });
routes.post('/login', userLogin);

module.exports = routes;