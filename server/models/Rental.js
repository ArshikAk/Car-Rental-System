const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
  car_id: { 
    type: Number,        
    ref: "Car",          
    required: true 
  },
  renter_name: { 
    type: String, 
    required: true 
  },
  renter_email: { 
    type: String, 
    required: true 
  },
  start_date: { 
    type: Date, 
    required: true 
  },
  end_date: { 
    type: Date, 
    required: true 
  },
  active: { 
    type: Boolean, 
    default: true 
  }
}, { timestamps: true });

module.exports = mongoose.model("Rental", rentalSchema);
