const express = require('express')
const router = express.Router()
const Transaction = require('../models/Transaction')

router.get('/transactions', function(req, res){
    Transaction.find({}).exec(function(error, transactions){
        res.send(transactions)
    })
})

router.post('/transaction', async function(req, res){
    let newTransaction = new Transaction(req.body)
    await newTransaction.save()
    Transaction.find({}).exec(function(error, transactions){
        res.send(transactions)
    })
})

module.exports = router