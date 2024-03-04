import React from 'react'
import './References.css'
export const References = (props) => {
  return (
    <div className='references'>
        <p>{props.name}</p>
        <p>{props.cargo}</p>
        <p>{props.number}</p>
        <p>{props.email}</p>
    </div>
  )
}
