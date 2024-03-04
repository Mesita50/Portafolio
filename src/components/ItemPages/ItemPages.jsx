import React from 'react'

export const ItemPages = (props) => {
  return (
    <li>
        <a href={props.link}>
            {props.icon}
        </a>
    </li>
  )
}
