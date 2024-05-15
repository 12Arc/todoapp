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
    const {checked} = req.body
    try{
        const update = await Task.findByIdAndUpdate(id, {ch},{ new: true, runValidators: true })
        res.status(201).json({update})
    }catch(err){
        return res.status(401).send({ err });
    }
}

//delete a task

const delTask = async(req,res)=>{
    const {id} = req.params
    try{
        const del = await Task.deleteOne({_id: id})
        res.status(200).json({ message: "Task successfully deleted" });
    }catch(err){
        res.status(500).send({ error: err.message });
    }
}

module.exports = {
    getTasks,
    addTasks,
    updTask,
    delTask
}