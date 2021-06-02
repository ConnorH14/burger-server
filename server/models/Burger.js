import mongoose from "mongoose";
const Schema = mongoose.Schema

const Burger = new Schema({
  title: { type: String, required: true},
  description: { type: String, required: true},
  prepTime: { type: Number, default: 5}
}, { timestamps: true, toJSON: {virtuals: true}})

export default Burger