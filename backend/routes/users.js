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

    .delete((req, res) => {
        userId = req.params;
        db('users')
        .where(userId)
        .del()
        .then(removedUser => {
            res.status(202).json(removedUser).send('User deleted')
        })
        .catch(err => {
            res.send(err.message).status(500).json({error: 'Unable to delete user'})
        })
    })

module.exports = router; 