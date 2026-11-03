import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 2, maxlength: 60 },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 8, select: false },
  phone: { type: String, trim: true, maxlength: 20 },
  role: { type: String, enum: ['customer', 'admin'], default: 'customer' }
}, { timestamps: true });
export default mongoose.model('User', userSchema);
