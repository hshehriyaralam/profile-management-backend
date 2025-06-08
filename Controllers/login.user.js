import { User } from "../Models/user.model.js";


const loginUser = async (req,res) => {
    try{
        const {email,password,fullName} = req.body;

        if(!email || !password){
            return res.status(400).json({ message: "Email and password required" });
        }

        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({
                message : "User Not Found"
            })
        }

        // password verify
        const isMatch = await user.isPasswordCorrect(password)
        if(!isMatch){
            return res.status(401).json({
                message : "Invalid credentials"
            })
        }

        const token = user.generateJWT();
        res.status(200)
        .cookie("token", token, {
            httpOnly: true,
            secure: false, 
            sameSite: "Lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        
        .json({
            message : "Login Successfully",
            user : {
                _id : user._id,
                fullName : user.fullName,
                email : user.email,
            },
            token,
        })
    }catch(error){
        console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
        
    }
}

export {loginUser}