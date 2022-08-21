const router =require("express").Router();
const Booking = require("../models/Booking");

//Add booking
router.post("/add", async (req,res) => {
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

module.exports = router;