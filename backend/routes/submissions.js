const express = require('express');
const db = require('../dbConfig.js');

const router = express.Router();

router.route('/')
    .get((req, res) =>{
        db('submissions')
        .then(submissions => {
            console.log(submissions)
            if(!submissions.length){
             return res.status(404).send('No submissions')
            }
            Promise.all(
                submissions.map(submission =>
                  db('submission_users')
                    .where('submission_id', submission.id)
                    .then(subusers => {
                      submission.users = subusers
                      console.log(submission)
                      return submission
                    })
                )
              )
              .then(resolved => {res.status(200).json(resolved)
            })
        })
        .catch(err => {
            res.send(err.message).status(500).json({error:"Could not retrieve submissions"})
        })
    })

    .post((req, res, next) => {
        const submission = req.body;
        console.log(submission.company_id)
        db('companies').where('companies.id', submission.company_id)
        .then(company => {
            console.log(company)
            if(!company.length){
               res.json({message:"Must provide valid company id"})
            }
            else {
            db.insert(submission)
            .into('submissions')
            .then(submission =>{
                console.log(".then")
                res.status(201).send('Submission added to database')
            })
            .catch(err => {
                console.log(".catch1")
                res.send(err.message).status(500).json({error: "Submission was not added to database"})
            })
        }
        })
        .catch(err => {
            console.log(".catch2")
            res.send(err.message).status(500)
        })    
    })

module.exports = router; 