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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medication',
        required: true,
    },
    dateAdministered: {
        type: Date,
        required: true
    },
    nextInjection: {
        type: Date,
        required: true
    },
    administeredArea: {
        type: String,
        required: true
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    }
});

export const Injection = mongoose.model('Injection', injectionSchema);

module.exports = Injection;