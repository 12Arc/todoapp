import React, { Fragment } from "react";

import "./App.css";

//components
import AddTask from './components/Input'



function App() {

    return(
        <Fragment>
            <div className="container">
                <AddTask/>
            </div>
        </Fragment>
    )
  
}

export default App;