import React from 'react';
import style from '../styles.css'

const AddTask= ()=>{

    return (

        <div className={style.box}>
            <input  classNametype="text" placeholder='Input the task' />
        </div>
    )
}

export default AddTask