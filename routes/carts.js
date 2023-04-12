var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const Trip = require('../models/trips');
const Cart = require('../models/carts');
var moment = require('moment');
const { ISO_8601 } = require('moment');
require('../models/connection');



router.get('/', (req, res) => {
    const cart = trips
      res.json({ allcarts: cart });
    });
  


 
module.exports = router;
