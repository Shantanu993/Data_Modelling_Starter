import mongoose from "mongoose"

const medicineSchema = new mongoose.Schema({
    medicineName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    prescribedFor: {
        type: String,
        required: true
    },
    frequency: {
        type: Number,
        required: true
    }
})

const medicalRecordSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    diagnosedWith: {
        type: String,
        required: true
    },
    prescribedMedicines: [
        {medicineSchema}
    ]
},{timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)