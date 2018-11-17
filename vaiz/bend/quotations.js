var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuotationsSchema = new Schema({
    shippingType:String,
    Country:String,
    City:String,
    State:String,
    Postal:String,
    depature:String,
    country:String,
    city:String,
    state:String,
    postal:String,
    arriaval:String,
    quantity:String,
    quantityunit:String,
    totalweight:String,
    weightunit:String,
    dimensions:String,
    dimensionsunit:String,
    stackable:Boolean,
    hazardous:Boolean,
    insurance:Boolean,
    incotermsunit:String,
    comment:String,
    amount:String,

});
module.exports = mongoose.model('Quotations', QuotationsSchema);