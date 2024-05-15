const Task = require('../Schema')

//get all tasks
const getTasks = async (req, res) => {
    try {
        const allTodo = await Task.find({});
        res.status(200).json(allTodo);
    } catch (err) {
        console.error('Failed to retrieve data:', err);
        res.status(500).send('Server error: ' + err.message);  // Providing more detailed error message
    }
};

//add a task 
const addTasks = async (req,res)=>{
    try{
        const {task} = req.body 
        const newTask = new Task({task})
        await newTask.save()
        res.status(200).json({newTask})

    }catch(error){
        console.error('Failed to add task: ', error);
        
    }
    
}

//update a task

const updTask = async(req,res)=>{

    const {id} = req.params
    const {task} = req.body
    try{
        const update = await Task.findByIdAndUpdate(id, {task},{ new: true, runValidators: true })
        res.status(201).json({update})
    }catch(err){
        return res.status(401).send({ err });
    }
}

//delete a task

const delTask = async(req,res)=>{
    const {id} = req.params
    try{
        const del = await Task.deleteOne(id)
        res.status(200).json({ message: "Book successfully deleted" });
    }catch(error){
        res.status(500).json({message : "Server error", error})
    }
}

module.exports = {
    getTasks,
    addTasks,
    updTask,
    del
}