var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const Trip = require('../models/trips');
const Cart = require('../models/cart');
var moment = require('moment');
const { ISO_8601 } = require('moment');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**Get trips by arrival, departure, date */
router.get('/tripsFilter/:departure/:arrival/:date', (req, res)=>{
Trip.find({
  departure : req.params.departure,
   arrival : req.params.arrival,
   date : {$gte : moment(req.params.date).startOf('day'), $lte : moment(req.params.date,ISO_8601).endOf('day')}})
.then(data => {
  res.json({trips : data});
});
}
)

router.get('/tripsAddCart',(req, res) =>{
  const newCart = new Cart({
    departure : req.body.departure,
    arrival : req.body.arrival,
    date : req.body.date,
    price : req.body.price,
  })

  newCart.save()
  .then(() => console.log('Cart save'));
})
module.exports = router;
