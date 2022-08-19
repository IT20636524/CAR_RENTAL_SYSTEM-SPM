const router =require("express").Router();
const Car = require("../models/Car");

//Add Car
router.post("/", async (req, res) => {
    const newCar = new Car(req.body);
    let code = 1;
    try {
      const carcount = await Car.find().sort({_id:-1}).limit(1)
      if(carcount.length > 0)
        code += carcount[0].code
        newCar.car_Id='CI00' + code;
        newCar.code = code;
      try {
        const savedCar = await newCar.save();
        res.status(200).json(savedCar);
      } catch (err) {
        res.status(500).json(err);
      }
    }catch(error){
      console.log(error)
    } 
  });

  module.exports = router;