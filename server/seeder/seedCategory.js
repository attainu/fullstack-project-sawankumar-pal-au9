import Category from "../model/categoryModel.js";
import mongoose from "mongoose";
import categoryData from './categoryData.js'
// const dev = require("../config/dev"); //get your mongoose string
//create your array. i inserted only 1 object here
const category = categoryData
//connect mongoose
mongoose
  .connect('mongodb+srv://amazedUser:amazed123@cluster0.yocxz.mongodb.net/AmazedApp?retryWrites=true&w=majority', { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db");
  });
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
category.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === category.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});