const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Book title is required'],
        trim:true,
        maxLength:[100, 'Books title can not be more than 100 characters']
    },
    author:{
        type:String,
        required:[true, 'Author name is required'],
        trim:true
    },
    year:{
        type:Number,
        required:[true, 'Publication year is required'],
        min : [1000, 'Year must be atleast 1000'],
        max : [new Date().getFullYear(), 'Year can not be in the future']
    },
    category:{
        type:String,
        required:true
    },
    isAvailable:{
        type:Boolean,
        required:true
    },
    quantity:{
        type:Number,
        required:[true, 'Quantity is needed when creating a book'],
        min : [5, 'Quantity should be at least 5'],
        max : [20, 'Quantity should be under the 20']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Book', BookSchema);