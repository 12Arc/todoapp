const pool = require("../database")

const getTasks = async (req,res)=>{
    try{
       
        const allTodo = await pool.query(
            "SELECT FROM * todo"
        )
        res.status(200json(allTodo.rows)
    }catch(err){
        console.error('Failed to retrieve data:', err);
        res.status(500).send('Server error');
    }
}

module.exports = {
    getTasks
}