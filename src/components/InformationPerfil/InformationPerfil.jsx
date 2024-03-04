import React from 'react'
import './InformationPerfil.css'

export const InformationPerfil = (props) => {
  return (
    <p className='description'>
        {props.info}
    </p>
  )
}
