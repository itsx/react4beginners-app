import classNames from 'classnames';
import React from 'react';
import { Store } from '../../Store';
import './NoteView.css';

export interface NoteViewProps {
  className?: string
  day: Date
  store: Store
}

export function NoteView(props: NoteViewProps) {
  const { className, day, store } = props
  const { saveNote } = store

  const [content, setContent] = React.useState(store.getNote(day) ?? '')

  React.useEffect(() => {
    // TODO: Throttle
    saveNote(content, day)
  }, [content, day, saveNote])

  return (
    <section className={classNames("editor", className)}>
      <textarea 
        className="editor__textarea" 
        placeholder={`What have you done ${day.toLocaleDateString()}...?`}
        onChange={(e) => setContent(e.target.value)}
        autoFocus
        value={content}
      />
    </section>
  );
}
