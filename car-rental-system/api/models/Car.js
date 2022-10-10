const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
    
    car_Id: {
      type: String,
      required: true,
      unique: true
    },
    category: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    passengers: {
      type: String,
      required: true
    },
    transmission: {
      type: String,
      required: true
    },
    airCondition: {
      type: String,
      required: true
    },
    fuelType: {
      type: String,
      required: true
    },
    engineCap: {
        type: String,
        required: true
      },
    costPerDay: {
        type: String,
        required: true
    },  
    image: {
      type: String,
      default: ""
    },
    availability: {
      type: String,
      default: "Available"
    },
    code:{
        type: Number,
        required:true
    },
    
},
    { timestamps: true }
);

module.exports = mongoose.model("Car", CarSchema);