import React, { Fragment } from "react";
import "./App.css";

// Components
import AddTask from './components/Input';
import ListTodo from "./components/List";

function App() {
  return (
    <Fragment>
      <div className="container">
        
          <AddTask />
        </div>
        <div className="listTodo">
          <ListTodo />
        </div>
      </div>
    </Fragment>
  );
}

export default App;