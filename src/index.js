const express = require("express");
const productControllerMen = require("./crudop/productMen.controller");

const productControllerWomen = require("./crudop/productWomen.controller");
const landingController = require("./crudop/landing.controller");
const signupController = require("./crudop/singup.controller");
const loginController = require("./crudop/login.controller");
const bagController = require("./crudop/bag.controller");
const greetingController = require("./crudop/greetings.controller");
const wishlistsController = require("./crudop/wishlist.controller");
const addressController = require("./crudop/address.controller");
const paymentController = require("./crudop/payment.controller");


const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"))
app.use("/mensproducts", productControllerMen);
app.use("/Womensproducts", productControllerWomen);
app.use("/landingpage", landingController);
app.use("/signup", signupController);
app.use("/login", loginController);
app.use("/bags", bagController);
app.use("/greetings", greetingController);
app.use("/wishlists", wishlistsController);
app.use("/address", addressController);
app.use("/payment", paymentController);


module.exports = app;