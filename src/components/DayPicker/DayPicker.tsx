import React from 'react'
import classNames from 'classnames'

import './DayPicker.css'

export interface DayPickerProps {
  className?: string
}

export function DayPicker(props: DayPickerProps) {
  const { className } = props

  return (
    // TODO
    <div 
      className={classNames('day-picker', className)}
    />
  )
}