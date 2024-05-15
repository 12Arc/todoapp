import React from 'react';
import '../styles.css'; // Import the CSS directly


const AddTask= ()=>{

    return (

        <div className="box">
            <form className="inputbox" >
                <input
            type="text"
            placeholder="Enter your task"/>
        <button type="submit">Add Task</button>
      </form>
        </div>
    )
}

export default AddTask