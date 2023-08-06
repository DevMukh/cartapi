import cart_schema from "../Cart_Schema/CartSchema.js";
const CartControllers = async (req, res) => {
  try {
    const cartadd = new cart_schema({
      Product_Name: req.body.Product_Name,
      Product_Id: req.body.Product_Id,
      Product_Price: req.body.Product_Price,
      Product_Qty: req.body.Product_Qty,
    });
    console.log(cartadd);
   const newcart= await cartadd.save();
  
    res.status(200).send({
      message: "Successfully added product",
      success: true,
      data:newcart,
    });
  } catch (err) {
    res.status(404).send({
      message: err.message,
      success: false,
      message: "something went wrong in cart controller",
    });
  }
};
export default CartControllers