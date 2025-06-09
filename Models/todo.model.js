import mongoose, { Schema } from "mongoose";

const todoShema = new Schema({
    title : {
        type : String,
        required : true,
    },
    comepleted : {
        type : Boolean,
        default : false
    },
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    createdAt : {
        type : Date,
        default :  Date.now
    }
},{timestamps : true})


const Todo = mongoose.model("todo",todoShema)

export {Todo}