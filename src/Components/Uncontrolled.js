import React, { useRef } from 'react'

const Uncontrolled = () => {
    let inputRef=useRef(null);
    const submitForm=(e)=>{
        e.preventDefault();
        console.warn('input value in field',inputRef.current.value );
        let input2=document.getElementById('input2').value;
        console.log('input value 2:',input2);
    }
  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={submitForm} >
      <input type='text' ref={inputRef}/>
      <input type='text' id='input2'/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default Uncontrolled
