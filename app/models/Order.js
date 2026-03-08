import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({

  userId: String,

  products: [

    {
      productId: String,
      quantity: Number,
      price: Number
    }

  ],

  totalPrice: Number,

  paymentMethod: {
    type: String,
    default: "COD"
  },

  status: {
    type: String,
    enum: ["pending","approved","cancelled"],
    default: "pending"
  }

});

export default mongoose.models.Order ||
mongoose.model("Order", OrderSchema);