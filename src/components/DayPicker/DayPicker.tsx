import classNames from 'classnames'
import React from 'react'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';
import './DayPicker.css'

export interface DayPickerProps {
  className?: string
  onDayPicked: (day: Date) => void
  onHasNote: (day: Date) => boolean
}

export function DayPicker(props: DayPickerProps) {
  const { className, onDayPicked, onHasNote } = props

  return (
    <Calendar 
      className={classNames('day-picker', className)}
      view='month'
      onClickDay={onDayPicked}
      tileClassName={({ date }) => {
        return onHasNote(date) ? 'day-picker__day--non-empty' : 'day-picker__day--empty'
      }}
    />
  )
}