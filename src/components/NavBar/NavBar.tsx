import React from 'react'
import classnames from 'classnames'

import './NavBar.css'

export interface NavBarProps {
  className?: string
}

export function NavBar(props: NavBarProps) {
  const { className } = props

  // TODO

  return (
    <nav className={classnames("navbar", className)}>
      {/* TODO */}
    </nav>
  )
}