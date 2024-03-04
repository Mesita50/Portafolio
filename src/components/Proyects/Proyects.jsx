import React from 'react'
import './Proyects.css'
import Img  from '../../assets/Libros.jpg'
export const Proyects = (props) => {
  return (
    <div className='proyect' >
        <img src={props.Img} alt="" />
        <div>
          <h3>{props.title}</h3>
          <p className='description2'>{props.description}</p>
          <a target="_blank" href={props.url}>Ir al Proyecto</a>
        </div>
        
    </div>
  )
}
