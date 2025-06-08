import {User} from "../Models/user.model.js"

const EditUser = async  (req,res) => {
    try{        
        const userId = req.user._id;
        const {fullName,email} = req.body;

        const updateFields = {}
        if(fullName && fullName.trim() !== "") updateFields.fullName = fullName
        if(email && email.trim() !== "") updateFields.email = email


        //agar koi bh field update na ho 
        if(Object.keys(updateFields).length === 0){
            return res.status(400).json({error : "No valid fields to update "})
        }

        const updateUser = await User.findByIdAndUpdate(
            userId , 
            {$set : updateFields},
            {new : true}
        )
  
    res.status(200).json({ 
         message : "User Updated Successfully" ,
         user : updateUser,
         })
         
}catch(error){
    console.error("EditUser Error:", error);
    res.status(500).json({ message: "Server Error" });
}

}


export {EditUser}