const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    UserType:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    gst:{
        type:String
    },
    pan:{
        type:String,
        required:true
    },
    aadhar:{
        type:Number
    },
    Email:{
        type: String,
        unique: true,
        required: 'Email address is required',
    },
    Phone:{
        type:Number,
        required:'Mobile Number is required'
    }
})

mongoose.model("Users",UserSchema);
