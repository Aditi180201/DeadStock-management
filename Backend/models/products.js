import mongoose from "mongoose"
const productSchema = new mongoose.Schema({
    image: String,
    name: String,
    quantity: Number,
    cost: Number,
    condition: String,
    date: Date
})

const Product = new mongoose.model("Product", productSchema);
export default Product;