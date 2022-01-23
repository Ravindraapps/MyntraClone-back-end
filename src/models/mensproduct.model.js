const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: {type:Number, required: true},
    price : {type: Number, required: true},
    img_urls: [{type: String, required: true}],
    categories: {type: String, required: true},
    size: {type: String, required: false},
    title: {type: String, required: true},
    price: {type:Number, required: true},
    gender: {type: String, required: true},
    description: {type: String, required: true},
    brand: {type: String, required: true},
    color:{type: String, required: true},
    discount: {type: String, required: false},
    off_price: {type: String, required: false},
    rating: {type: Number, required: false},
    count: {type: Number, required: false},
},{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("mensproduct", productSchema);