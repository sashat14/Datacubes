const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const usersRoutes = require('./routes/users.js');
const companyRoutes = require('./routes/companies.js');


server.use(express.json());
server.use(cors());
server.use(helmet());

server.get('/', (req, res) =>{res.send('You have reached the DataCubes API')});
server.use('/api/users', usersRoutes);
server.use('/api/companies', companyRoutes);



module.exports = {server};