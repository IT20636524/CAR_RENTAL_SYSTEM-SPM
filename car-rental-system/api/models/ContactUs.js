const mongoose = require("mongoose");

const ContactUsSchema = new mongoose.Schema(
  {
    messege_code: {
      type: String,
      required: true,
      unique: true,
    },
    customer_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    messege: {
      type: String,
      required: false,
    },

    code:{
        type: Number,
        required:true,
      },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactUs", ContactUsSchema);