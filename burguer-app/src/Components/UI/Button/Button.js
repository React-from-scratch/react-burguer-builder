import React from 'react'

const button = (props) => (
  <div>
    <button onClick={props.modalClosed}>CANCEL</button>
    <button>CONTINUE</button>
  </div>
)

export default button
