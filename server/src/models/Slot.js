import mongoose from 'mongoose';
const slotSchema = new mongoose.Schema({
  location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true, index: true },
  code: { type: String, required: true, trim: true, uppercase: true },
  vehicleType: { type: String, enum: ['Any', 'Car', 'Bike', 'SUV', 'Van'], default: 'Any' },
  status: { type: String, enum: ['available', 'reserved', 'maintenance'], default: 'available' }
}, { timestamps: true });
slotSchema.index({ location: 1, code: 1 }, { unique: true });
export default mongoose.model('Slot', slotSchema);
