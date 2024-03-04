import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (
    <li>
        <a href={props.link}>{props.text}</a>
    </li>
  )
}
