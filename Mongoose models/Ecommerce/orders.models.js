import mongoose from "mongoose";

const OrderItemsSchema = new mongoose.Schema(
    {
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        },

        quantity: {
            type:Number,
            required:0
        }
    }
)

const AddressSchema = new mongoose.Schema(
    {
        flat_no: {
            type:Number,
            required:true
        },

        city:{
            type:String,
            required:true
        },

        pincode: {
            type:Number,
            required:true,
            unique:true
        }
    }
)

const orderSchema = new mongoose.Schema(
    {
        orderprice: {
            type:Number,
            required:true,
        },

        customer: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },

        orderItems: {
            type: [OrderItemsSchema]
        },

        address: {
            type:[AddressSchema],
            required:true
        },

        status: {
            type:String,
            enum: ['PENDING','CANCELLED','DELIVERED'],
            default:"PENDING"
        }
    },
    {timestamps:true}
)

export const Order = mongoose.model("Order",orderSchema)