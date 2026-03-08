import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({

  name: String,

  description: String,

  price: Number,

  stock: Number,

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },

  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand"
  },

  image: String

});

export default mongoose.models.Product ||
mongoose.model("Product", ProductSchema);