import React from 'react'
import classnames from 'classnames'

import './NavBar.css'

import logo from '../../assets/logo.svg'
import leftArrow from '../../assets/left-arrow.svg'

export interface NavBarProps {
  className?: string
  onBack: () => void
  canGoBack: boolean
  title: string
}

export function NavBar(props: NavBarProps) {
  const { className, onBack, canGoBack, title } = props

  return (
    <header className={classnames("navbar", className)}>
      {canGoBack && (
        <button className='navbar__back-btn' onClick={onBack}>
          <img src={leftArrow} className="navbar__back-btn__icon" alt="back-button" />  
        </button>
      )}

      {!canGoBack && (
        <img src={logo} className="navbar__logo" alt="logo" />
      )}

      <h1 className="navbar__label">
       {title}
      </h1>
    </header>
  )
}