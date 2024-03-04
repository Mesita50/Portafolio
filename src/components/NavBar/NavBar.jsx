import React from 'react'
import './NavBar.css'
export default function NavBar({children}) {
  return (
    <nav>
        <ul className='navBar' >{children}</ul>
    </nav>
  )
}
