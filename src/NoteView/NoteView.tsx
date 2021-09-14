import classNames from 'classnames';
import React from 'react';
import './NoteView.css';

export interface NoteViewProps {
  className?: string
  day: Date
}

export function NoteView(props: NoteViewProps) {
  const { className, day } = props

  const [content, setContent] = React.useState(localStorage.getItem('note') ?? '')

  React.useEffect(() => {
    localStorage.setItem('note', content)
  }, [content])

  return (
    <section className={classNames("editor", className)}>
      <textarea 
        className="editor__textarea" 
        placeholder={`What have you done ${day.toLocaleDateString()}...?`}
        onChange={(e) => setContent(e.target.value)}
        autoFocus
      >
        {content}
      </textarea>
    </section>
  );
}
