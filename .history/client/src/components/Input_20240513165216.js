import React, {useState} from 'react';
import '../styles.css'; // Import the CSS directly
import axios from 'axios'


const AddTask= ()=>{
    axios.defaults.baseURL = "http://localhost:5000";
    const[task, setTask] = useState("")
    const handleChange=(e)=>{
        setTask(e.target.value)

    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response = await axios.post('/add')
        }
        
    }
    return (

        <div className="box">
            <form className="inputbox" >
                <input
                    type="text"
                    placeholder="Enter your task"
                    value={task}
                    onChange={handleChange}/>
                <button className="button" type="submit" onClick={handleSubmit}>Add Task</button>
            </form>
        </div>
    )
}

export default AddTask