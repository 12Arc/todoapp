import React, {useState, Fragment, useEffect} from 'react'
import axios from 'axios'

const ListTodo = ()=>{

    const [List, setList] = useState([])

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
            <table>
                <thead>
                    <tr>
                    <th>Description</th>
                    <th>Status</th>
            <       th>Delete</th>
                    </tr>
                </thead>
                {List.map(item=>(
                    <tr key={item._id}>
                        <td>{item.task}</td>
                        <td><button></button></td>

                    </tr>
                ))}
            </table>
        </Fragment>
    )
}

export default ListTodo