const router = require("express").Router();
const Card = require("../models/Card");
const protect = require('../middleware/middleware.js');


//CREATE CARD
router.post("/",protect, async (req, res) => {

  // console.log(req.user);
req.body.userid = req.user._id;
    const newCard = new Card(req.body);
    // newCard.set(userid:req.user._id)
  
        try {
          const savedCard = await newCard.save();
          res.status(200).json(savedCard);
        } catch (err) {
          res.status(500).json(err);
        }
  
 
  
  });

 //UPDATE CARD
router.put("/update/:id",protect, async(req, res) => {
    try {
      const updatedCard = await Card.findOneAndUpdate({_id:req.params.id},
        {
          $set: req.body
        },{new:true}
      );
     res.status(200).json(updatedCard);
    
  } catch (err) {
    res.status(500).json(err);
  }
})


//DELETE CARD
router.delete("/delete/:id",protect, async (req, res) => {
  try {
    const card = await Card.findOneAndDelete({_id:req.params.id});
    try {
      await card.delete();
      res.status(200).json("Card has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET CARD
router.get("/:id",protect, async (req, res) => {
  try {
    const card = await Card.findOne({ 'id': req.params.id });
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET ALL CARD
// router.get("/",protect, async (req, res) => {
//     try {
//       const card = await Card.find();
//       res.status(200).json(card);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

  //GET ALL CARD
router.get("/",protect, async (req, res) => {
  try {
    const card = await Card.find({ 'userid': req.user._id});
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json(err);
  }
});

//   //get All cards entered by user
// router.get("/card/", async (req, res) => {
//   try {
//     const booking = await Booking.find({ 'userid': req.user._id });
//     res.status(200).json(booking);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


  module.exports = router;