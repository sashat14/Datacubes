const express = require('express');
const db = require('../dbConfig.js');

const router = express.Router();

router.route('/')
    .get((req, res) =>{
        db('users')
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.send(err.message).status(500).json({error:"Could not retrieve users"})
        })
    })

module.exports = router; 