const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
  {
    feedback_code: {
      type: String,
      required: true,
      unique: true,
    },
    comment: {
      type: String,
      required: true,
    },
    code:{
        type: Number,
        required:true,
      },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", FeedbackSchema);