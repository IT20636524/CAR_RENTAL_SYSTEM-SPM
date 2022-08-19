const mongoose = require("mongoose");
  
const CardSchema = new mongoose.Schema(
  { 
    cid: {
      type: String,
      required: true,
      unique: true,
    },
    card_number: {
        type: String,
        required: true,
    },
    card_holder: {
        type: String,
        required: true,
      },
    card_month: {
      type: String,
      required: true,
    },
    card_year:{
      type: String,
      required:true,
    },
    card_cvv:{
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

module.exports = mongoose.model("Card", CardSchema);