const express = require('express');
const db = require('../dbConfig.js');

const router = express.Router();

router.route('/')
    .get((req, res) =>{
        db('submission_users')
        .then(submissionUsers => {
            res.status(200).json(submissionUsers)
        })
        .catch(err => {
            res.send(err.message).status(500).json({error:"Could not retrieve submission users"})
        })
    })

    .post((req, res) => {
        const submissionUser = req.body;
        db.insert(submissionUser)
        .into('submission_users')
        .then(subUser =>{
            // console.log(req);
            res.status(201).json(subUser).send('Submission user added to database')
        })
        .catch(err => {
            res.send(err.message).status(500).json({error: "Submission user was not added to database"})
        })
    })

    .delete((req, res) => {
        subUserId = req.params;
        db('submission_users')
        .where(subUserId)
        .del()
        .then(removedItem => {
            res.status(202).json(removedItem).send('User deleted')
        })
        .catch(err => {
            res.send(err.message).status(500).json({error: 'Unable to delete user'})
        })
    })

module.exports = router; 