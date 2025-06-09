import { User } from "../Models/user.model.js";
import {getRandomAvatar} from "../utils/avatarList.js"


const registerUser = async (req,res) => {
    try{
        const {fullName,email,password} = req.body

        // validations
        if(!fullName || !email || !password){
            return  res.status(400).json({message : "All Filed is Required"})
        }

        // USer Existing Check
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(409).json({message : "User Already exist"})
        }


        const avatar = getRandomAvatar()

        const user = new User({
            
            fullName,
            email,
            password,
            profilePicture : avatar,

        })
        await user.save();

        const token = user.generateJWT()

        res.status(201)
        .cookie("token", token, {
            httpOnly: true,
            secure: false, 
            sameSite: 'None',
            domain: '.vercel.app', 
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        .json({
            message : "User Registered Successfully",
            user : {
                _id : user._id,
                fullName : user.fullName,
                email : user.email
            },
            token,
        })
    }catch(error){
    console.error("Register Error:", error);
    res.status(500).json({ message: "Server error" });
    }
}


export {registerUser}