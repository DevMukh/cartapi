import { timeStamp } from "console";
import mongoose from "mongoose";
const cartschema = new mongoose.Schema(
  {
    Product_Name: {
      type: "string",
      required: true,
    },
    Product_Id: {
      type:Number,
      required: true,
    },
    Product_Price: {
      type:Number,
      required: true,
    },
    Product_Qty: {
      type:Number ,
      required: true,
    },
  },
  { timestamps: true }
);
const cart_schema = mongoose.model("cart", cartschema);
export default cart_schema;
