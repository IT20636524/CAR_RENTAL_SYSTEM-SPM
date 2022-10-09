const router =require("express").Router();
const AcceptedBooking = require("../models/AcceptedBooking");

// Add accepted bookings
router.post("/add", async (req,res) => {
    const newAcceptedBooking = new AcceptedBooking(req.body);
    try{
        const bookingcount = await AcceptedBooking.count()
        newAcceptedBooking.booking_id = 'AB00' + (parseInt(bookingcount)+1)
        try{
            const booking = await newAcceptedBooking.save();
            res.status(200).json(booking);
        } catch (err){
            res.status(500).json(err);
        }
    }catch(err){
        console.log(err);
    }
});

//Get all accepted bookings
router.get("/", async(req,res) => {
    const book_id = req.query.booking_id;
    try{
        let bookings;
        if(book_id) {
            bookings = await AcceptedBooking.find({ booking_id });
        } else {
            bookings = await AcceptedBooking.find();
        }
        res.status(200).json(bookings);
    }catch(err){
        res.status(500).json(err);
    }
});



module.exports = router;