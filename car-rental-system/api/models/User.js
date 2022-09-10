const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        user_id:{
            type:String,
            required:true,
            unique:true,
        },
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        },
        conpassword:{
            type:String,
        },
        profile_pic:{
            type:String,
            default:"",
        }
    },
    {timestamps:true}
);

module.exports = mongoose.model("User",UserSchema);