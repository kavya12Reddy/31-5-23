import React,{useState} from 'react'

export default function Home() {
  const [name,setName] = useState("demo")
  function change(){
    setName("react")
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={()=>setName("angular")}>Submit</button>
    </div>
  )
  }