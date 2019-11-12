const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const usersRoutes = require('./routes/users.js');
const companyRoutes = require('./routes/companies.js');
const submissionRoutes = require('./routes/submissions.js');
const submissionUserRoutes = require('./routes/submissionUsers.js');


server.use(express.json());
server.use(cors());
server.use(helmet());

server.get('/', (req, res) =>{res.send('You have reached the DataCubes API')});
server.use('/api/users', usersRoutes);
server.use('/api/companies', companyRoutes);
server.use('/api/submissions', submissionRoutes);
server.use('/api/submission-users', submissionUserRoutes);



module.exports = {server};