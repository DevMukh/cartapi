import express from 'express';
import connection from './DataBaseconfig/Dbconnection.js';
import bodyParser from 'body-parser';
import cors from 'cors'
import CartControllers from './Controller/CartController.js';
const app = express();
const routes=express.Router();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port=2000;
connection();
app.use('/cart',CartControllers)
app.post('/api/admin-cart/items/add/cart',CartControllers)
app.listen(2000,()=>{
    console.log('Your app is listening at ',port);
})