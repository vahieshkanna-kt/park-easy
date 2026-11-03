import mongoose from 'mongoose';
const vehicleSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  number: { type: String, required: true, trim: true, uppercase: true, maxlength: 20 },
  type: { type: String, enum: ['Car', 'Bike', 'SUV', 'Van', 'Other'], required: true },
  make: { type: String, trim: true, maxlength: 40 },
  model: { type: String, trim: true, maxlength: 40 }
}, { timestamps: true });
vehicleSchema.index({ user: 1, number: 1 }, { unique: true });
export default mongoose.model('Vehicle', vehicleSchema);
