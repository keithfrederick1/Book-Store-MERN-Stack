import mongoose from 'mongoose';

const injectionSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true 
    },
    patientMrn: {
        type: Number,
        required: true
    },
    medication: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Medication',
        type: String,
        required: true,
    },
    dateAdministered: {
        // type: Date,
        type: String,
        required: true
    },
    nextInjection: {
        // type: Date,
        type: String,
        required: true
    },
    administeredArea: {
        type: String,
        required: true
    },
    admin: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Admin',
        type: String,
        required: true
    }
});

export const Injection = mongoose.model('Injection', injectionSchema);
