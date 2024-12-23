// models/Disaster.js
import mongoose from 'mongoose'

const DisasterSchema = new mongoose.Schema({
    address: { type: String, required: true },
    disaster: { type: String, required: true },
    status: { type: String, enum: ['ongoing', 'resolved'], required: true },
    imageUrl: { type: String,  }, // Field for the Cloudinary URL
  }, { timestamps: true });




const Report = mongoose.model('Report',DisasterSchema);

export default Report;