const Task = require('../Schema')

const getTasks = async (req, res) => {
    try {
        const allTodo = await Task.find({});
        res.status(200).json(allTodo);
    } catch (err) {
        console.error('Failed to retrieve data:', err);
        res.status(500).send('Server error: ' + err.message);  // Providing more detailed error message
    }
};

const addTasks


module.exports = {
    getTasks
}