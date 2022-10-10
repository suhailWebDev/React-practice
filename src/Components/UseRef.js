import React, { useRef } from 'react';

const UseRef = () => {
    let inputRef=useRef(null);
    const handleInput=()=>{
        inputRef.current.value=1000;
        inputRef.current.style.color='red';
        inputRef.current.style.background='black';
    }
  return (
    <div>
      <h1>UseRef in react</h1>
      <input type='text' ref={inputRef}/>
      <button onClick={handleInput}>Handle Input</button>
    </div>
  )
}

export default UseRef
