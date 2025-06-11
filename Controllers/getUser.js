import {User} from "../Models/user.model.js"
const getProfile = async (req,res) => {
    try{        
        res.status(200).json({
            success : true,
            user : req.user,
        })
    }catch(error){
        console.log("get USer failed",error.message);
         res.status(200).json({
           message : "User not found"
        })
    }
        
    }
    
    const logOutUser = async (req,res) => {
        try{
            res.clearCookie("token", {
                httpOnly : true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict"
            });

            res.status(200).json({
                message: "Logout successful"
            })
        }catch(error){
        console.error("Logout error:", error.message);
        return res.status(500).json({ message: "Logout failed" });
        }
    }
export {getProfile,logOutUser}