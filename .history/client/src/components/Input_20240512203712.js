import React, {useState} from 'react';
import '../styles.css'; // Import the CSS directly
import axios from 'axios'


const AddTask= ()=>{
    axios.defaults.baseURL = "http://localhost:8080";axios.defaults.baseURL = "http://localhost:8080";
    const[task, setTask] = useState("")
    const handleChange=(e)=>{
        setTask(e.target.value)

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(task)
        setTask('')
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