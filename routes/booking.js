var express = require('express');
var router = express.Router();
const Card = require('../models/carts');
var moment = require('moment');


router.get('/',(req, res)=>{
    Card.find({isBook : true}).populate('panier')
    .then(data => {
        res.json({book : data});
    })
})

module.exports = router;
