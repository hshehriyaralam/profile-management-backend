import {Todo} from "../Models/todo.model.js"


const addTodo = async (req,res) => {

    try{
        const {title} = req.body
        const userId = req.user.id
        const todo = new Todo({title,userId})
        await todo.save()
        res.status(200).json({ message: "Todo added successfully", todo })
    }catch(error){
        console.log("Add Error", error.message);
         res.status(500).json({message : "Failed to create todo"})
        
    }

}


const getTodo = async (req,res) => {
    try{
        const userId = req.user.id
        const todo = await Todo.find({userId})
        res.status(200).json(todo)

    }catch(error){
         console.log(" Fetch Error", error.message);
         res.status(500).json({message : "Failed to Fetch todo"})
    }
}


export {addTodo,getTodo}