import React from 'react'

function Square(props) {
    console.log(props.value);
  return (
    <div onClick={props.onClick} className='square'>
        <h5>{props.value}</h5>
    </div>
  )
}

export default Square