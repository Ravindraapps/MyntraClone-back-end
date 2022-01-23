const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://ravindra:ravindra123@cluster0.vsvyo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}