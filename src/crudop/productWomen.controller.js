const express = require("express");

const Productw = require("../models/womensproduct.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const products = await Productw.find().lean().exec();
    return res.render("womensProducts");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/womenproducstapi", async (req, res) => {
  try {
    const products = await Productw.find().lean().exec();
    res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.get("/womensproductapi/:brand", async (req, res) => {
  try {
    // let str = choose(req.params.brand);
    console.log(req.params.brand);
    // let substr = str.substring(1);
    // str = str.charAt(0).toUpperCase() + substr;
    const products = await Productw.find({ brand: { $eq: req.params.brand } })
      .lean()
      .exec();
    // console.log(str);
    res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/womensproductapi/:color", async (req, res) => {
  try {
    // let str = choose(req.params.brand);
    console.log(req.params.color);
    // let substr = str.substring(1);
    // str = str.charAt(0).toUpperCase() + substr;
    const products = await Productw.find({ color: { $eq: req.params.color } })
      .lean()
      .exec();
    // console.log(str);
    console.log(products);
    res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/womensproductapi/sort/:q", async (req, res) => {
  try {
    // let str = choose(req.params.brand);
    if (req.params.q === "low");
    {
      let x = -1;
    }
    // let substr = str.substring(1);
    // str = str.charAt(0).toUpperCase() + substr;
    const products = await Productw.find({})
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
    const product = await Productw.create(req.body);
    return res.status(201).send({ product });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
