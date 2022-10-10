import React, { useState } from 'react'

const HOC = () => {
  return (
    <div>
      <h1>Hoc</h1>
      <HighOCRed cmp={Counter}/>
      <HighOCGreen cmp={Counter}/>
      <HighOCBlue cmp={Counter}/>
    </div>
  );
  function HighOCRed(props){
    return <h1 style={{backgroundColor:'red'}}><props.cmp/></h1>
  }
  function HighOCGreen(props){
    return <h1 style={{backgroundColor:'green'}}><props.cmp/></h1>
  }
  function HighOCBlue(props){
    return <h1 style={{backgroundColor:'blue'}}><props.cmp/></h1>
  }
  function Counter(){
    const[count,setCount]=useState(0);
    const click=()=>{
        setCount(count+1);
    }
    return <div>
        <h3>{count}</h3>
        <button onClick={click}>Update count</button>
    </div>
  }
}

export default HOC
