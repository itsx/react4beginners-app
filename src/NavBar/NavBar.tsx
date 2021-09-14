import React from 'react'
import logo from '../logo.svg';
import classnames from 'classnames'

import './NavBar.css'

export interface NavBarProps {
  className?: string
}

export function NavBar(props: NavBarProps) {
  const { className } = props

  return (
    <header className={classnames("navbar", className)}>
      <img src={logo} className="navbar__logo" alt="logo" />
      <h1 className="navbar__label">
       Done App
      </h1>
    </header>
  )
}