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




module.exports = {
    getTasks,
    addTasks
}