import React, { forwardRef} from 'react';


const User = (props) => {
  console.log(props.id);
  return (
    <div>
      {/* <input type='text' ref={ref}/> */}
      <h1>User Component</h1>
    </div>
  )
}

export default User
