import mongoose from 'mongoose'

//minischema
const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity:{
        type:Number,
        required:true,
    }
}) 

const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    orderItems:{
        type:[orderItemSchema] //or we can do array of obj 
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['PENDING','CANCELLED','DELIVERED'],
        default:'PENDING',
    }
},{timestamps:true})

export const Order=mongoose.model('Order',orderSchema)