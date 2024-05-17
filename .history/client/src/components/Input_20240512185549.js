import React, {useState} from 'react';
import '../styles.css'; // Import the CSS directly


const AddTask= ()=>{

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
                <button className="button" type="submit" onSubmit=>Add Task</button>
            </form>
        </div>
    )
}

export default AddTask