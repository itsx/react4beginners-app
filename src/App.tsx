import React from 'react'
import { NavBar, NoteView, DayPicker } from './components'
import { formatDay } from './utils'
import { useStoreProvider } from './Store'

import './App.css'

export function App() {

  const store = useStoreProvider()
  const [selectedDay, selectDay] = React.useState<Date | null>(null)

  const title = React.useMemo(() => {
    if (!selectedDay) {
      return 'Done App'
    }
    return formatDay(selectedDay)
  }, [selectedDay])

  return (
    <div className="app">
      <NavBar
        canGoBack={selectedDay !== null}
        onBack={() => selectDay(null)}
        title={title}
        className='app__navbar'
      />

      {!selectedDay && (
        <DayPicker 
          className='app__content' 
          onDayPicked={selectDay}
          onHasNote={store.hasNote}
        />
      )}

      {selectedDay && (
        <NoteView 
          className='app__content' 
          day={selectedDay}
          store={store}
        />
      )}
    </div>
  )
}

export default App