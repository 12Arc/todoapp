import Task from '../database'

const getTasks = async (req, res) => {
    try {
        const allTodo = await pool.query("SELECT * FROM todo");
        res.status(200).json(allTodo.rows);
    } catch (err) {
        console.error('Failed to retrieve data:', err);
        res.status(500).send('Server error: ' + err.message);  // Providing more detailed error message
    }
};


module.exports = {
    getTasks
}