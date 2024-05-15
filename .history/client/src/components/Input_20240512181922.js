import React from 'react';
import '../styles.css'; // Import the CSS directly


const AddTask= ()=>{

    return (

        <div className="box">
            <form className="inputbox" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
        </div>
    )
}

export default AddTask