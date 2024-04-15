import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
   },
   dob: {
    type: Date,
    required: true
   },
   mrn: {
    type: Number,
    required: true
   },
   zip: {
    type: Number,
    required: false
   },
   last4Ssn: {
    type: Number,
    required: false
   },
   lastInjection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Injection',
    required: false
   },
   nextInjection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Injection',
    required: false

   },
   entries: {
    type:[mongoose.Schema.Types.ObjectId],
    ref: 'Entry',
    required: false
   }
});

export const Patient = mongoose.model('Patient', patientSchema);

module.exports = patientSchema;