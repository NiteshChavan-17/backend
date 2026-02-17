import mongoose, { trusted } from 'mongoose'

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

const patientSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required:true
        },

        dignosedWith: {
            type:String,
            required:true,
        },

        address: {
            type:[AddressSchema],
            required:true
        },

        age: {
            type:Number,
            required:true
        },

        bloodGroup: {
            type:String,
            enum:['O+','A+','B+','AB+','O-','A-','B-','AB-'],
            required:true
        },

        gender: {
            type:String,
            enum: ['M','F','O']
        },

        admittedIn: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hospital'
        }
    },{timestamps:true}
);

export const Patient = mongoose.model("Patient", patientSchema);