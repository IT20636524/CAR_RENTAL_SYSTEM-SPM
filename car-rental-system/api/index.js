const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const UserAuthRoute = require("./routes/UserAuth");
const BookingRoute = require("./routes/bookings");
const AcceptedBookingRoute = require("./routes/acceptedBookings");
const CardRoute = require("./routes/cards");
const StaffRoute = require("./routes/staff");
const carRoute = require("./routes/cars");
const PaymentRoute = require("./routes/payments");
const ContactUsRoute = require("./routes/contactus");
const FeedbackRoute = require("./routes/feedback");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");

const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 
app.use(cors()) 

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology: true,
})
.then(console.log("Connected to MongoDB"))
.catch(err=>console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log(req);
      cb(null, "api/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

const update = multer({ storage: storage });
app.put("/api/update", update.single("file"), (req, res) => {
  res.status(200).json("File has been updated");
});

app.use("/api/UserAuth", UserAuthRoute);
app.use("/api/bookings", BookingRoute);
app.use("/api/acceptedbookings", AcceptedBookingRoute);
app.use("/api/staff", StaffRoute);
app.use("/api/cards", CardRoute);
app.use("/api/cars", carRoute);
app.use("/api/payments", PaymentRoute);
app.use("/api/contactus", ContactUsRoute);
app.use("/api/feedback", FeedbackRoute);
app.use("/images", express.static(path.join(__dirname, "/images")));

app.listen("5000", ()=>{
    console.log("Backend is running.");
});