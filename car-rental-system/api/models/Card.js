const mongoose = require("mongoose");
  
const CardSchema = new mongoose.Schema(
  { 
    cardNumber: {
        type: String,
        required: true,
    },
    cardHolder: {
        type: String,
        required: true,
      },
    cardMonth: {
      type: String,
      required: true,
    },
    cardYear:{
      type: String,
      required:true,
    },
    cardCvv:{
      type: String,
      required:true,
    },
    userid:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:true,
    },
   

  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", CardSchema);