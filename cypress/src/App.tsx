import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cypress example
        </p>
        <a
          className="App-link"
          href="https://docs.cypress.io/app/get-started/why-cypress"
          rel="noopener noreferrer"
        >
          Learn how to use Cypress
        </a>
      </header>
    </div>
  );
}

export default App;
