import React from 'react'
import { NavBar } from './NavBar'
import { NoteView } from './NoteView'
import { DayPicker } from './DayPicker'

import './App.css'

export function App() {

  const [selectedDay, selectDay] = React.useState<Date | null>(null)

  return (
    <div className="app">
      <NavBar className='app__navbar' />

      {!selectedDay && (
        <DayPicker className='app__content' onDayPicked={selectDay} />
      )}

      {selectedDay && (
        <NoteView className='app__content' day={selectedDay} />
      )}
    </div>
  )
}

export default App