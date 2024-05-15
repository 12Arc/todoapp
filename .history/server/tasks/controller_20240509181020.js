const Pool = require("../../")

const getTasks = async (req,res)=>{
    try{
       
        const allTodo = await Pool.query(
            "SELECT FROM * todo"
        )
        res.json(allTodo.rows)
    }catch(err){
        console.error('Failed to retrieve data:', err);
        res.status(500).send('Server error');
    }
}

module.exports = {
    getTasks
}