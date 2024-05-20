const mongoose = require("mongoose");
const { type } = require("os");

const prooductSchema = mongoose.Schema({
    product: String,
    image: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcdlor: String,
});

module.exports = mongoose.model("prooduct", prooductSchema);