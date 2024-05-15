import React from 'react';
import '../styles.css'; // Import the CSS directly


const AddTask= ()=>{

    return (

        <div className={style.box}>
            <input  className={style.inputbox} type="text" placeholder='Input the task' />
        </div>
    )
}

export default AddTask