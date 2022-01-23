const express = require("express");

const Productw = require("../models/womensproduct.model");

const router = express.Router();

router.get("", async(req,res) => {
    try{
        const products = await Productw.find().lean().exec();
        return res.render("womensProducts")
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});

router.get("/womenproducstapi", async(req,res) => {
    try{
        const products = await Productw.find().lean().exec();
        res.send(products);
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});

router.post("/multiple",async(req,res) => {
    try{
        const product = await Productw.create(req.body);
        return res.status(201).send({product});
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});

module.exports = router;

