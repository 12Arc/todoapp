import React, { Fragment } from "react";

import "./App.css";

//components
import AddTask from './components/Input'
import ListTodo from "./components/List";



function App() {

    return(
        <Fragment>
            <div classname>
                <AddTask/>
                <ListTodo/>
            </div>
           
        </Fragment>
    )
  
}

export default App;
