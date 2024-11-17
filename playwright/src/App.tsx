import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Playwright example
        </p>
        <a
          className="App-link"
          href="https://playwright.dev/docs/intro"
          rel="noopener noreferrer"
        >
          Learn how to use Playwright
        </a>
      </header>
    </div>
  );
}

export default App;
