import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt  from 'jsonwebtoken'

const userSchema = new Schema({
    fullName : {
        type : String,
        required : true,
        trim : true,
        index : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : [true, 'Password is  required'],

    },
    profilePicture : {
        type : String,
        default : ""
    }
},{
    timestamps : true
})

userSchema.pre("save", async function(next){
    if(!this.isModified('password'))  return next();
    this.password = await bcrypt.hash(this.password, 10);
    next()
})

userSchema.methods.isPasswordCorrect  =  async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateJWT = function(){
    return jwt.sign(
        {
            _id : this._id,
            email : this.email,
            fullName : this.fullName
        },
        process.env.JWT_SECRET,
        {expiresIn : "7d"}
    )
}

export const User = mongoose.model("User",userSchema)