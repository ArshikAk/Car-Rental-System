const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  id: { 
    type: Number, 
    required: true, 
    unique: true 
  },
  make: { 
    type: String, 
    required: true 
  },
  model: { 
    type: String, 
    required: true 
  },
  year: { 
    type: Number, 
    required: true 
  },
  price_per_day: { 
    type: Number, 
    required: true 
  }
}, { timestamps: true });

module.exports = mongoose.model("Car", carSchema);
