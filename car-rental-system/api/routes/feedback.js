const router = require("express").Router();
const Feedback = require("../models/Feedback");

//CREATE Feedback
router.post("/", async (req, res) => {
   
    const newFeedback = new Feedback(req.body);
    let code = 1;
    try {
      const feedbackcount = await Feedback.find().sort({_id:-1}).limit(1)   
      if(feedbackcount.length > 0)
        code += feedbackcount[0].code
        // newFeedback.feedback_code = 'F00'+ code;
        newFeedback.code = code;
    try {
      const savedFeedback = await newFeedback.save();
      res.status(200).json(savedFeedback);
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (error) {
    console.log(error)
  }

  });


  //GET VIEW ALL FEEDBACK DETAILS
router.get("/", async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.status(200).json(feedback);
  } catch (err) {
    res.status(500).json(err);
  }
});


  module.exports = router;