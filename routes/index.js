var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const Trip = require('../models/trips');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tripsFilter', (req, res)=>{
Trip.find({departure : req.body.departure, arrival : req.body.arrival, date : req.body.date})
.then(data => {
  res.json({trips : data});
});

}
)
module.exports = router;
