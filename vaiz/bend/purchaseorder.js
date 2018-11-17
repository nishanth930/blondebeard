var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PoSchema = new Schema({
    id:String,
    email:String,
    company:String,
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
    taxes:String,
    amount:String,
    
});
module.exports = mongoose.model('Purchaseorder', PoSchema);