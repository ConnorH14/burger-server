import ValueSchema from "../models/Value";
import BurgerSchema from "../models/Burger";
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Burgers = mongoose.model("Burger", BurgerSchema);
}

export const dbContext = new DbContext();
