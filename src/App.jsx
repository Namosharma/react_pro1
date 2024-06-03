import {useState} from 'react' 
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)
  //let counter=15;
  const addValue=()=>{

    counter=counter+1;
    if(counter<=20)
    setCounter(counter)

  }
  const removeValue=()=>{
    counter=counter-1;
    if(counter>=0)
    setCounter(counter);
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}> Add value:{counter}</button>
      <br/>
      <button onClick={removeValue}>remove value:{counter}</button>
    </>
  )
}

export default App
