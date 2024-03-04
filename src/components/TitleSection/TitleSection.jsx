import React from 'react'
import './TitleSection.css'
import LogoSena2 from '../../assets/logoSena2.png'

export const TitleSection = (props) => {
  return (
    <div className='SectionTitle' id={props.id}>
        <img src={LogoSena2} alt="LogoSena"/>
        <h2>{props.title}</h2>
    </div>
  )
}
