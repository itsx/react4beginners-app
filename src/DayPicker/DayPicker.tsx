import classNames from 'classnames'
import React from 'react'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';
import './DayPicker.css'

export interface DayPickerProps {
  className?: string
  onDayPicked: (day: Date) => void
}

export function DayPicker(props: DayPickerProps) {
  const { className, onDayPicked } = props

  return (
    <Calendar 
      className={classNames('day-picker', className)}
      view='month'
      onClickDay={onDayPicked}
    />
  )
}