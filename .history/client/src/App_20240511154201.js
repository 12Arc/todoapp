import React, { Fragment } from "react";

import "./App.css";

//components
import AddTask from './components/Input'



function App() {

    return(
        <Router>
            <Route path="/" element={AddTask}/>
        </Router>
    )
  
}

export default App;
