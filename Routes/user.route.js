import express from 'express'
import {registerUser} from "../Controllers/user.controllers.js"
import { loginUser } from "../Controllers/login.user.js";
import { authMiddleware } from "../MiddleWare/authMiddleware.js";
import { getProfile,logOutUser } from "../Controllers/getUser.js";
import { EditUser } from '../Controllers/EditUser.js';
import { googleAuth } from '../Controllers/googleAuth.js';
import { uploadProfileImage } from '../Controllers/controller.multer.js';
import {upload} from "../MiddleWare/upload.js"


const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/getUser', authMiddleware,getProfile)
userRouter.post('/logout',logOutUser)
userRouter.put('/edit',authMiddleware,EditUser)
userRouter.post('/google-auth',googleAuth)
userRouter.post('/upload-profile',authMiddleware, upload.single('profilePicture'), uploadProfileImage)


export default userRouter;