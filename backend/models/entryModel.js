import mongoose from 'mongoose';

const entrySchema = mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true
    },
    patientDob: {
      type: Date,
      required: true
    },
    patientZip: {
      type: Number,
      required: false
    },
    last4Ssn: {
      type: Number,
      required: false
    },
    medication: {
      type: String,
      required: true,
    },
    admin: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    mrn: {
      type: Number,
      required: true
    },
    injection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Injection',
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;