const router = require("express").Router();
const Staff = require("../models/Staff");

//CREATE staff
router.post("/", async (req, res) => {
   
    const newStaff = new Staff(req.body);
    let code = 1;
    try {
      const staffcount = await Staff.find().sort({_id:-1}).limit(1)   
      if(staffcount.length > 0)
        code += staffcount[0].code
        // newStaff.driver_code = 'DC00'+ code;
        newStaff.code = code;
    try {
      const savedStaff = await newStaff.save();
      res.status(200).json(savedStaff);
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (error) {
    console.log(error)
  }

  });

//UPDATE STAFF
router.put("/update/:driver_code", async(req, res) => {
    try {
      const updatedStaff = await Staff.findOneAndUpdate({'driver_code':req.params.driver_code},
        {
          $set: req.body
        },{new:true}
      );
     res.status(200).json(updatedStaff);
    
  } catch (err) {
    res.status(500).json(err);
  }
})


//DELETE STAFF
router.delete("/delete/:driver_code", async (req, res) => {
  try {
    const staff = await Staff.findOneAndDelete({'driver_code':req.params.driver_code});
    try {
      await staff.delete();
      res.status(200).json("Driver has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET DRIVER DETAILS
router.get("/:driver_code", async (req, res) => {
  try {
    const staff = await Staff.findOne({ 'driver_code': req.params.driver_code });
    res.status(200).json(staff);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET VIEW ALL DRIVER DETAILS
router.get("/", async (req, res) => {
    try {
      const staff = await Staff.find();
      res.status(200).json(staff);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //get all list
// router.get("/itemcategory/:item_category/", async (req, res) => {
//   try {
//     const cloth = await Cloth.find({ 'item_category': req.params.item_category });
//     res.status(200).json(cloth);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

  module.exports = router;