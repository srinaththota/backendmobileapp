const app = require('express')();
const cors = require('cors');
const {server} = require('./config');

app.use(cors())
const unrestrictedRoutes = require('./routes');
