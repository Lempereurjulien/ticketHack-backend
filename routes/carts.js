var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const Trip = require('../models/trips');
const Cart = require('../models/carts');
var moment = require('moment');
const { ISO_8601 } = require('moment');



  router.get("/", (req, res)=>{
    Cart.find({})
    .populate('panier')
    .then(data => {
      res.json({carts : data})
    })
  })

  router.get("/purchase", (req, res)=>{
    Cart.updateMany({isBook: false}, {isBook : true})
    .then(()=> console.log('update ok'));
     
  })



//cart delete
router.delete('/:panier', (req, res) => {
 Cart.deleteOne({panier : req.params.panier})
 .then(deletedTrip => {
  if (deletedTrip) {}
  Cart.find()
  .then(data =>{
    res.json({ result: true, carts: data });
     })});
    });

  
 
module.exports = router;

