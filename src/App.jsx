import React, {useState} from 'react'

import "./App.css";
import "./App.scss";

import logo from "./react.svg"

function App(){

    const[name,setName] = useState("");

    return (

        <div className = "App">

            <h1>
                Hello WOrld
                <img src= {logo} width= "25" alt ="react-logo" />
            </h1>
            <div>

                <label htmlFor="name">Nombre: </label>                
                <input 
                    type="text" 
                    id="name" 
                    value={name} onChange = {
                        (event)=> setName(event.target.value) 
                }/>
            
            </div>
        </div>
    );
}

export default App;