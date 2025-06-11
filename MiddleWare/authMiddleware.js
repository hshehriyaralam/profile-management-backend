import jwt from "jsonwebtoken"
import { User } from "../Models/user.model.js"


const authMiddleware = async (req,res,next) => {
    const token = req.cookies.token
    
    if(!token){
        return res.status(401).json({
            message : "Unauthorized - Token missing"
        })
    }
    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decode._id).select("-password")
        if(!user) return res.status(404).json({ message: "User Not found" });

        req.user = user;
        console.log("user",user);
        
        next()
    }catch(error){
     return res.status(401).json({ message: "Invalid token" });
    }
}

export {authMiddleware}