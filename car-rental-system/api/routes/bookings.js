const router =require("express").Router();
const Booking = require("../models/Booking");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
 const protect = async (req, res, next) => {
    const token = req.headers.authorization ? (req.headers.authorization.startsWith('Bearer') ? req.headers.authorization.split(' ')[1] : null) : null
    if (!token) return res.status(403).json('Unauthorized');
    const decodedUser =  jwt.verify(token, process.env.JWT_SECRET).data
    const user = decodedUser ? await User.findOne({ 'user_id':decodedUser.user_id }) : null
    if (!user) return res.status(403).json('Unauthorized');
    req.user = user
    next()
  }

//Add booking
router.post("/add",protect, async (req,res) => {
    const newBooking = new Booking(req.body);
    try{
        const bookingcount = await Booking.count()
        newBooking.booking_id = 'B00' + (parseInt(bookingcount)+1)
        try{
            const booking = await newBooking.save();
            res.status(200).json(booking);
        } catch (err){
            res.status(500).json(err);
        }
    }catch(err){
        console.log(err);
    }
});

//Get all bookings
router.get("/all", async(req,res) => {
    const book_id = req.query.booking_id;
    try{
        let bookings;
        if(book_id) {
            bookings = await Booking.find({ booking_id });
        } else {
            bookings = await Booking.find();
        }
        res.status(200).json(bookings);
    }catch(err){
        res.status(500).json(err);
    }
});

//Get all bookings according to name
router.get("/:name", async(req,res) => {
    const book_id = req.query.booking_id;
    try{
        let bookings;
        if(book_id) {
            bookings = await Booking.find({ booking_id });
        } else {
            bookings = await Booking.find({name:req.params.name});
        }
        res.status(200).json(bookings);
    }catch(err){
        res.status(500).json(err);
    }
});

//Get one booking
router.get("/getone/:booking_id", async(req,res) => {
    try{
        const booking = await Booking.findOne({ 'booking_id':req.params.booking_id });
        res.status(200).json(booking);
    }catch(err){
        res.status(500).json(err);
    }
});

//Update booking
router.put("/update/:id", async(req,res) => {
    try{
        const updatedBooking = await Booking.findOneAndUpdate({'booking_id':req.params.id},
            {
                $set:req.body
            },{new:true}
        );
        res.status(200).json(updatedBooking);
    }catch(err){
        res.status(500).json(err);
    }
});

//Delete booking
router.delete("/delete/:id", async(req,res) => {
    try{
        const deletedBooking = await Booking.findOneAndDelete({'booking_id':req.params.id});
        res.status(200).json("Booking has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
})

//Get booking count
router.route("/countDocuments/:name/:paymentStatus").get(function(req, res) {
    Booking.count({ name:req.params.name,payment_status: req.params.paymentStatus}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  });

//Get today booking count
router.route("/countDocuments/:name").get(function(req, res) {
    Booking.count({ name:req.params.name,timestamp:Date()}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  });

module.exports = router;