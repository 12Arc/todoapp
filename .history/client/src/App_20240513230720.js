import React, { Fragment } from "react";
import "./App.css";

// Components
import AddTask from './components/Input';
import ListTodo from "./components/List";

function App() {
  return (
    <Fragment>
      
        
          <AddTask />
        
          <ListTodo />
        
      
    </Fragment>
  );
}

export default App;