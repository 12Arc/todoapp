import React, {useState, Fragment} from 'react'

const ListTodo = ()=>{

    const [List, setList] = useState([])

    return (

        <Fragment>
            <table>
                <thead>
                    <tr>
                    <th>Description</th>
                    <th>Edit</th>
            <th>Delete</th>
                    </tr>
                </thead>
            </table>
        </Fragment>
    )
}

export default ListTodo