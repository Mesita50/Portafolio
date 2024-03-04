import React from 'react'
import './Header.css'

export const Header = ({children,isVisible }) => {
  return (
    <header style={{ display: isVisible ? 'none' : 'flex' }}>
            {children}
    </header>
  )
}
