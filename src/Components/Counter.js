import React, { useReducer, useState } from 'react'

function counterReducer(State,action){
switch(action.type){
    case "Increament":
        return{...State,
            age:State.age+1
        }
    case "name":
        return{...State,
            name:action.payload
        }
}

}




const Counter = () => {

    const [State,Dispatch]=useReducer(counterReducer,{name:"",age:0})
    
     
    // const [State,setState]=useState(0);
    const handleClick=()=>{
        Dispatch({type:"Increament"})
        // setState(State+1)
    }


    const handlechange=(e)=>{
        Dispatch({type:"name",payload:e.target.value})
    }
  return (
    <div>
        <h1> UseReducer concepts using in counter</h1>
        <input placeholder='enter your name' type="text" onChange={handlechange}></input>
        <button onClick={handleClick}>
            Increament age
        </button>
        <div><h1>Hello, {State.name} are {State.age}yrs old</h1>
        <h1></h1>
        </div>
    </div>
  )
}

export default Counter