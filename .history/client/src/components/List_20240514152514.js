import React, {useState, Fragment, useEffect} from 'react'
import axios from 'axios'
import '../styles.css'; 
const ListTodo = ()=>{

    const [List, setList] = useState([])
    const [checked, setChecked] = useState()

    const deleteTodo = async (id)=>{
        try{
            const response = await axios.delete(`http://localhost:8080/todolist//delete/${id}`)
            setList(List.filter(item=> item._id !==id))
        }catch(err){
            console.error(err.message);
        }
    }

    const completeTodo = (id)=>{
        
        setChecked(id.target.checked)
    }

    const getTodo = async()=>{
        try{
            const response = await axios.get("http://localhost:8080/todolist/",List)
            setList(response.data)
        }catch(err){
            console.error(err.message)
        }
    }
    useEffect(() => {
        getTodo();
      }, []);
    console.log(List)

    return (

        <Fragment>
            <table >
                <thead>
                    <tr>
                    <th>Description</th>
                    <th>Status</th>
            <       th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {List.map(item=>(
                    <tr key={item._id}>
                        <td>{item.task}</td>
                        <td ><input type='checkbox' className = {item.checked ? "strike": "item"} onClick={completeTodo}/></td>
                        <td><button className="button" onClick={()=>deleteTodo(item._id)}> Delete</button></td>

                    </tr>
                ))}
             </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodo