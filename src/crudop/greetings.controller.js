const express = require("express");

const router = express.Router();

router.get("", async(req,res)=> {
    try{
        res.render("greeting");
    }catch(err){
        return res.status(500).send({message: err.message});
    }
})

module.exports = router;