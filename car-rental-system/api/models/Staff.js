const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema(
  {
    driver_code: {
      type: String,
      required: true,
      unique: true,
    },
    driver_name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    contact_number: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: true,
    },
    driving_license_no: {
      type: String,
      required: false,
    },
    experience: {
      type: String,
      required: false,
    },

    note: {
      type: String,
      required: false,
    },
    
    image: {
      type: String,
      default: "",
    },

    code:{
        type: Number,
        required:true,
      },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Staff", StaffSchema);