import React, {useState, Fragment} from 'react'
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
            </table>
        </Fragment>
    )
}

export default ListTodo