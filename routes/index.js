var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');
const Cart = require('../models/carts');
var moment = require('moment');
const { ISO_8601 } = require('moment');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**Get trips by arrival, departure, date */
router.get('/tripsFilter/:departure/:arrival/:date', (req, res)=>{
Trip.find({
  departure :{$regex : new RegExp(req.params.departure, "i")},
   arrival : {$regex : new RegExp(req.params.arrival, "i")},
   date : {$gte : moment(req.params.date).startOf('day'), $lte : moment(req.params.date,ISO_8601).endOf('day')}})
.then(data => {
  res.json({trips : data});
});
}
)

router.post('/tripsAddCart',(req, res) =>{
  const newCart = new Cart({
    panier : req.body.id,
    isBook : false,
  })
  newCart.save()
  .then(() => console.log('Cart save'));
})
module.exports = router;
