import React, { Fragment } from "react";
import "./App.css";

// Components
import AddTask from './components/Input';
import ListTodo from "./components/List";

function App() {
  return (
    
      <div className="main-container">
          <h1>Todo App</h1>
          <AddTask />
          <ListTodo/>
        
        
        
      </div> 
   
  );
}

export default App;
