const express = require("express");

const Productm = require("../models/mensproduct.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const products = await Productm.find().lean().exec();
    // console.log(products)
    //  res.send(products);
    return res.render("menProduct");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/mensproductapi", async (req, res) => {
  try {
    const products = await Productm.find().lean().exec();
    res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.get("/mensproductapi/:brand", async (req, res) => {
  try {
    // let str = choose(req.params.brand);
    console.log(req.params.brand);
    // let substr = str.substring(1);
    // str = str.charAt(0).toUpperCase() + substr;
    const products = await Productm.find({ brand: { $eq: req.params.brand } })
      .lean()
      .exec();
    // console.log(str);
    res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/mensproductapi/:color", async (req, res) => {
  try {
    // let str = choose(req.params.brand);
    console.log(req.params.color);
    // let substr = str.substring(1);
    // str = str.charAt(0).toUpperCase() + substr;
    const products = await Productm.find({ color: { $eq: req.params.color } })
      .lean()
      .exec();
    // console.log(str);
    console.log(products);
    res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/mensproductapi/sort/:q", async (req, res) => {
  try {
    // let str = choose(req.params.brand);
    if (req.params.q === "low");
    {
      let x = -1;
    }
    // let substr = str.substring(1);
    // str = str.charAt(0).toUpperCase() + substr;
    const products = await Productm.find({})
      .sort({ off_price: x })
      .lean()
      .exec();
    // console.log(str);
    console.log(products);
    res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/multiple", async (req, res) => {
  try {
    const product = await Productm.create(req.body);
    return res.status(201).send({ product });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
