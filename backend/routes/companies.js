const express = require('express');
const db = require('../dbConfig.js');

const router = express.Router();

router.route('/')
.get((req, res) =>{
    db('companies')
    .then(companies => {
        res.status(200).json(companies)
    })
    .catch(err => {
        res.send(err.message).status(500).json({error:"Could not retrieve companies"})
    })
})

module.exports = router;