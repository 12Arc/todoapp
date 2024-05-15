import React from 'react';
import style from '../styles.css'

const AddTask= ()=>{

    return (

        <div>
            <input className={style.box} type="text" placeholder='Input the task' />
        </div>
    )
}

export default AddTask