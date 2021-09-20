import React from 'react'
import classNames from 'classnames'

import './DayPicker.css'

export interface DayPickerProps {
  className?: string
}

export function DayPicker(props: DayPickerProps) {
  const { className } = props

  // TODO:
  // - Integrate a react-calendar library (don't forget to import it's CSS)
  // - Lift the state containing picked day up via props
  // - Use `tileClassName` prop to set certain class name if day has a prop and other class name if it doesn't

  // Class name tips:
  // - day-picker
  // - day-picker__day--non-empty
  // - day-picker__day--empty

  return (
    // TODO
    <div 
      className={classNames('day-picker', className)}
    />
  )
}