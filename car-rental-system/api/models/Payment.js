const mongoose = require("mongoose");
  
const PaymentSchema = new mongoose.Schema(
  { 
    payment_id: {
      type: String,
      required: true,
      unique: true,
    },
    booking_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
      },
      card: {
      type: String,
      required: true,
    },
    cost_per_day:{
      type: String,
      required:true,
    },
    contact_number:{
      type: String,
      required:true,
    },
    code:{
        type: Number,
        required:true,
      },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);