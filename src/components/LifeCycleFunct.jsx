import React from 'react';
import {useEffect, useState} from "react";


const LifeCycleFunct = () => {
    const [count,setCount] =useState(0);
    const [message, setMessage] = useState('')
  useEffect(()=>{
    console.log('Component added to DOM. ComponentDidMount')
    async function fetchData(){
        const response = await fetch ('https://todo-redev.herokuapp.com/api/users',{
method:"GET",
headers:{
    "Content-Type":"application/json"
}
        })
        const result = await response.json();
        console.log(result)
    }
    fetchData()
  },[])
   
   
    useEffect(()=>{
        if (count %2 ===0){
            setMessage(`Current count : ${count}`)
        } 

    },[count])
    useEffect(()=>{
        console.log(`Component changed. ComponentDidUpdate. Current count: ${count}`)
    })

    useEffect(()=>{
return ()=>{
    console.log("Component will be deleted. ComponentDidUnmount")
}
    },[])
    const increment = ()=>{
        setCount(count+1)
    }
    
  return (
    <div>
      <p>{message} </p>
      <button onClick = {increment}>Press</button>
    </div>
  )
}

export default LifeCycleFunct
