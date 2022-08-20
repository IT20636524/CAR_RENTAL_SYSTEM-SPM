const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register
router.post("/register", async (req,res) => {
    
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
        user_id : req.body.user_id,
        name : req.body.name,
        email : req.body.email,
        password : hashedPass,
        profile_pic : req.body.profile_pic,
    });
    try{
        const usercount = await User.count()
        newUser.user_id = 'U00' + (parseInt(usercount)+1)
        try{
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (err){
            res.status(500).json(err);
        }
    }catch(err){
        console.log(err);
    }
});

//Login
router.post("/login", async(req,res) => {
    try{
        const user = await User.findOne({ email : req.body.email})
        !user && res.status(400).json("Wrong credentials")

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json("Wrong credentials")

        const { password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;