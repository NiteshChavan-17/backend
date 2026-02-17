import mongoose from 'mongoose'

const AddressSchema = new mongoose.Schema(
    {
        addressLine1:{
            type:String,
            required:true
        },

        addressLine1:{
            type:String,
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

const hospitalSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required:true,
        },

        address:{
            type:[AddressSchema],
            required:true
        },

        specializedIn: [
            {
                type:String
            }
        ]
    },{timestamps:true}
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);