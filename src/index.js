const express = require("express");
const productControllerMen = require("./crudop/productMen.controller");

const productControllerWomen = require("./crudop/productWomen.controller");
const landingController = require("./crudop/landing.controller");

const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"))
app.use("/mensproducts", productControllerMen);
app.use("/Womensproducts", productControllerWomen);
app.use("/landingpage", landingController);

module.exports = app;