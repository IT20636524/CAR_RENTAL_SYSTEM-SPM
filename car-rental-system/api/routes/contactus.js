const router = require("express").Router();
const ContactUs = require("../models/ContactUs");

//CREATE CONTACTUS
router.post("/add", async (req, res) => {
   
    const newContactUs = new ContactUs(req.body);
    let code = 1;
    try {
      const contactuscount = await ContactUs.find().sort({_id:-1}).limit(1)   
      if(contactuscount.length > 0)
        code += contactuscount[0].code
        // newContactUs.messege_code = 'M00'+ code;
        newContactUs.code = code;
    try {
      const savedContactUs = await newContactUs.save();
      res.status(200).json(savedContactUs);
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (error) {
    console.log(error)
  }

  });

  //GET VIEW ALL CONTACT US DETAILS
router.get("/", async (req, res) => {
  try {
    const contactus = await ContactUs.find();
    res.status(200).json(contactus);
  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router;