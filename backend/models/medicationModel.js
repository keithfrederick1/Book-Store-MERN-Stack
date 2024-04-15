import mongoose from 'mongoose';

const medicationSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
   },
   ndc: {
    type: Number,
    required: true
   }
});

export const Medication = mongoose.model('Medication', medicationSchema);

module.exports = medicationSchema;