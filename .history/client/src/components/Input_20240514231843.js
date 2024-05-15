import React, {useState} from 'react';
import '../styles.css'; // Import the CSS directly
import axios from 'axios'



const AddTask= ()=>{
    //axios.defaults.baseURL = "http://localhost:8080";
    const[task, setTask] = useState("")
    const [error, setError] = useState("")
    const handleChange=(e)=>{
        setTask(e.target.value)

    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(!validate()){
            return;
        }
        try{
            const response = await axios.post('http://localhost:8080/todolist/add',{task} )
            console.log(response.data) 
            setTask("")
            alert("Task added!")
            window.location = "/";
            

        }catch(error){
            console.log("Error in posting task", error)
        }
        
    }

    const validate = ()=>{
        if(task.trim()===""){
            setError("Task is required")
            return false
        }
        return true
    }
    
    return (

        <div className="box">
            <form className="inputbox" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your task"
                    value={task}
                    onChange={handleChange}/>
                {error && <div className=''}
                <button className="button" type="submit" >Add Task</button>
            </form>
            
        </div>
    )
}

export default AddTask