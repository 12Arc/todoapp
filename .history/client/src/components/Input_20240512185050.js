import React, {useState} from 'react';
import '../styles.css'; // Import the CSS directly


const AddTask= ()=>{

    const[task, setTask] = useState("")
    const handleChange=(e)=>{
        setTask(e.target.value)
    }

    return (

        <div className="box">
            <form className="inputbox" >
                <input
                    type="text"
                    placeholder="Enter your task"
                    onChange={handleChange}/>
                <button className="button" type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default AddTask