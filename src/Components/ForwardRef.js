import React, { useRef } from 'react'
import User from './User';

const ForwardRef = () => {
    const inputRef=useRef(null);
    const inputHandle=()=>{
        inputRef.current.value=1000;
        inputRef.current.style.color='blue';
    }
  return (
    <div>
      <h1>ForwardRef component</h1>
      <User ref={inputRef}/>
      <button onClick={inputHandle}>ForwardRef Handle</button>
    </div>
  )
}

export default ForwardRef
