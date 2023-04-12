const mongoose = require('mongoose');
const Trip = require('../models/trips');


const cartSchema = mongoose.Schema({
    panier: { type: mongoose.Schema.Types.ObjectId, ref: 'trips' },
})

const Cart = mongoose.model('carts', cartSchema);

module.exports = Cart;