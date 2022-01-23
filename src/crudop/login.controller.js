const express = require("express");

const router = express.Router();

router.get("", async(req,res)=> {
    try{
        res.render("login");
    }catch(err){
        return res.status(500).send({message: err.message});
    }
})

module.exports = router;