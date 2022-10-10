import React, { useState } from 'react'

const ControlledComponent = () => {
    const [val,setVal]=useState('');
  return (
    <div>
      <h1>Controlled Component</h1>
      <input type='text' value={val} onChange={(e)=>setVal(e.target.value)}/>
      <h2>Value:{val}</h2>
    </div>
  )
}

export default ControlledComponent
