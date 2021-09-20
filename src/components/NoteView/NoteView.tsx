import classNames from 'classnames';
import React from 'react';

import './NoteView.css';

export interface NoteViewProps {
  className?: string
}

export function NoteView(props: NoteViewProps) {
  const { className } = props
  
  // TODO
  
  return (
    <section className={classNames("note-view", className)}>
      {/* TODO */}
    </section>
  )
}
