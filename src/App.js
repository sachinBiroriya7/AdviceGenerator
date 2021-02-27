import React, {useState,useEffect} from 'react'
import axios from 'axios';
import './App.css'
export default function App() {

  const [advice,setAdvice]= useState('')
  const [count, setCount] = useState(0)

  
  

  useEffect(() => {
    const fetchAdvice=async()=>{
      const url=`https://api.adviceslip.com/advice`
      const response=await axios.get(url)
      setAdvice(response.data.slip.advice);
    }
    fetchAdvice()
  },[count])

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
           {<button className="button" onClick={()=>setCount(count+1)}>
                  <span>GIVE ME AN ADVICE!!!</span>
            </button>}
      </div> 
    </div>
  )
}
