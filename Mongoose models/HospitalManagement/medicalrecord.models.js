import mongoose from 'mongoose'

const medicalRecordSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },

        admittedOn: {
            type:String,
            required:true
        },

        dischargedOn: {
            type:String,
            required:true,
            default:'None'
        },

        followup: {
            type:String,
        }
    },
    {timestamps:true});

export const MedicalRecords = mongoose.model("MedicalRecords", medicalRecordSchema);