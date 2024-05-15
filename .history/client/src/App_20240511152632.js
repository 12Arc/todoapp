import React, { Fragment } from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import "./App.css";

//components
import AddTask from './components/Input'

const router = createBrowserRouter([

    {
        path: '/',
        element : <AddTask></AddTask>
    }
])

function App() {

    return(
        <main>
           <RouterProvider></RouterProvider>
        </main>
    )
  
}

export default App;
