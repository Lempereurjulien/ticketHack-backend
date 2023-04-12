const mongoose = require('mongoose');
const Trip = require('../models/trips');


const cartSchema = mongoose.Schema({
    panier: [{ type: mongoose.Schema.Types.ObjectId, ref: 'trips' }],
    isBook: Boolean,
})

const Cart = mongoose.model('carts', cartSchema);

module.exports = Cart;