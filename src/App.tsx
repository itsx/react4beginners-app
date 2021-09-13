import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [content, setContent] = React.useState(localStorage.getItem('note') ?? '')

  React.useEffect(() => {
    localStorage.setItem('note', content)
  }, [content])

  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <h1 className="header__label">
          Done App
        </h1>
      </header>
      <section className="content editor">
        <textarea 
          className="editor__textarea" 
          placeholder='What have you done today...?' 
          onChange={(e) => setContent(e.target.value)}
        >
          {content}
        </textarea>
      </section>
    </div>
  );
}

export default App;
