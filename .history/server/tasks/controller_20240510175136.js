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
        const task = req.body 
        const newTask = new Task({task})
        await newTask.save()
        res.status(200).json({taskid: newTask._id})

    }catch{
        console.error('Failed to add task: ', error);
        res.status(500).send({ message: 'Failed to add task', error: error.message });
    }
    
}


module.exports = {
    getTasks,
    add
}