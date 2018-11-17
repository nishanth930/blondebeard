var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuoteSchema = new Schema({

    id:String,
    shippingType:String,
    Country:String,
    City:String,
    State:String,
    Postal:String,
    departure:String,
    country:String,
    city:String,
    state:String,
    postal:String,
    arrival:String,
    quantity:String,
    quantityunit:String,
    totalweight:String,
    weightunit:String,
    length:String,
    width:String,
    height:String,
    units:String,
    stackable:Boolean,
    hazardous:Boolean,
    insurance:Boolean,
    incotermsunit:String,
    comment:String,
    amount:String,
   
});
module.exports = mongoose.model('Quote', QuoteSchema);