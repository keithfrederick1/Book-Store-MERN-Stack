import mongoose from 'mongoose';

const entrySchema = mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true
    },
    patientDob: {
      // type: Date,
      type: String,
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
      // type: Date,
      type: String,
      required: true,
    },
    mrn: {
      type: Number,
      required: true
    },
    injection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Injection',
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

export const Entry = mongoose.model('Entry', entrySchema);
