import React, {useState, Fragment} from 'react'

const ListTodo = ()=>{

    const [List, setList] = useState([])

    const getTodo = async()=>{
        try{
            
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