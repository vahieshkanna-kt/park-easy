import mongoose from 'mongoose';
const locationSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  address: { type: String, required: true, trim: true, maxlength: 250 },
  city: { type: String, required: true, trim: true, maxlength: 60 },
  description: { type: String, trim: true, maxlength: 500 },
  hourlyRate: { type: Number, required: true, min: 0 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });
export default mongoose.model('Location', locationSchema);
