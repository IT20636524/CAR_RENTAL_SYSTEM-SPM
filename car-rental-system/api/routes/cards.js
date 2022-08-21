const router = require("express").Router();
const Card = require("../models/Card");

//CREATE CARD
router.post("/", async (req, res) => {
    const newCard = new Card(req.body);
  
    let code = 1;
    try {
      const cardcount = await Card.find().sort({_id:-1}).limit(1)
      if(cardcount.length > 0)
        code += cardcount[0].code
        newCard.cid = 'CID00'+ code;
        newCard.code = code;
  
        try {
          const savedCard = await newCard.save();
          res.status(200).json(savedCard);
        } catch (err) {
          res.status(500).json(err);
        }
  
    } catch (error) {
      console.log(error)
    }
  
  });
  
 //UPDATE CARD
router.put("/update/:cid", async(req, res) => {
    try {
      const updatedCard = await Card.findOneAndUpdate({'cid':req.params.cid},
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
router.delete("/delete/:cid", async (req, res) => {
  try {
    const card = await Card.findOneAndDelete({'cid':req.params.cid});
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
router.get("/:cid", async (req, res) => {
  try {
    const card = await Card.findOne({ 'cid': req.params.cid });
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL CARD
router.get("/", async (req, res) => {
    try {
      const card = await Card.find();
      res.status(200).json(card);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//   //get All cards entered by user
// router.get("/card/:booking_id", async (req, res) => {
//   try {
//     const booking = await Booking.find({ 'booking_id': req.params.booking_id });
//     res.status(200).json(booking);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


  module.exports = router;