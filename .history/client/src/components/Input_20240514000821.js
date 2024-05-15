import React, {useState} from 'react';
import '../styles.css'; // Import the CSS directly
import axios from 'axios'
import ListTodo from './List';


const AddTask= ()=>{
    //axios.defaults.baseURL = "http://localhost:8080";
    const[task, setTask] = useState("")
    const handleChange=(e)=>{
        setTask(e.target.value)

    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:8080/todolist/add',{task} )
            console.log(response.data) 
            setTask("")
            alert("Task added!")
            

        }catch(error){
            console.log("Error in posting task", error)
        }
        
    }
    
    return (

        <div className="box">
            <form className="inputbox" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your task"
                    value={task}
                    onChange={handleChange}/>
                <button className="button" type="submit" >Add Task</button>
            </form>
        </div>
    )
}

export default AddTask