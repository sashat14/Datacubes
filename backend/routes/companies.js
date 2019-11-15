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

    .put((req, res) =>{
        companyId = req.params;
        updatedCompany = req.body;
        db('companies')
        .where(companyId)
        .update(updatedCompany)
        .then(company => {
            res.status(201).json(item).send('Company updated')
        })
        .catch(err => {
            res.send(err.message).status(500).json({error: 'Unable to update company'})
        })
    })

module.exports = router;