var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const Trip = require('../models/trips');
const Cart = require('../models/carts');
var moment = require('moment');
const { ISO_8601 } = require('moment');



router.get('/', (req, res) => {
  Cart.find().then(data => {
    res.json({carts : data});
  })});


//cart delete
router.delete('/:panier', (req, res) => {
 Cart.deleteOne().then(data =>{
    res.json({ result: true, carts: carts });
     })});

  
 
module.exports = router;
