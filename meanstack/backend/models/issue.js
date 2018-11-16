import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Issue = new Schema({
    type: {
        type: String
    },
    description: {
        type: String
    },
    hours: {
        type: String
    },
    unitprice: {
        type: String
    },
    amount: {
        type: String
        
    }
});

export default mongoose.model('Issue', Issue);