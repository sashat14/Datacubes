const knex = require('knex');
const knexConfig = require('./knexfile.js');

const environment = 'development' || 'production';
const db = knex(knexConfig[environment]);

module.exports = db;