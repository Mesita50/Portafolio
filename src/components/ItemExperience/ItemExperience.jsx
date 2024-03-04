import React from 'react'
import './ItemExperience.css'

export const ItemExperience = (props) => {
  return (
    <div className='itemExperience'>

        <img src={props.image} alt="" />
        <progress className='barProgress' value={props.value} max="100"></progress>
        <p>{props.progress}</p>


    </div>
  )
}
