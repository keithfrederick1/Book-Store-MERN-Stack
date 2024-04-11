import mongoose from 'mongoose';

const entrySchema = mongoose.Schema(
  {
    medication: {
      type: String,
      required: true,
    },
    admin: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    mrn: {
      type: Number,
      required: false
    }
  },
  {
    timestamps: true,
  }
);

export const Entry = mongoose.model('Entry', entrySchema);
