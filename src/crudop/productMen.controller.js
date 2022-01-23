const express = require("express");

const Productm = require("../models/mensproduct.model");

const router = express.Router();

router.get("", async(req,res) => {
    try{
        const products = await Productm.find().lean().exec();
        // console.log(products)
        //  res.send(products);
        return res.render("menProduct");

    }catch(err){
        return res.status(500).send({message: err.message});
    }
});

router.get("/mensproductapi", async(req,res) => {
    try{
        const products = await Productm.find().lean().exec();
        res.send(products);
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});



router.post("/multiple",async(req,res) => {
    try{
        const product = await Productm.create(req.body);
        return res.status(201).send({product});
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});

module.exports = router;