import express from 'express';
import CartControllers from '../Controller/CartController.js';
const cartroute = express();
cartroute.post('/cart',CartControllers)
module.exports=cartroute;