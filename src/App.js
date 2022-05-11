
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import logo from './logo.svg';
import './App.scss';
import Header from './components/header'
import Hero from './components/hero'

function App() {
  return (
    <div className="App">
      <Header />
    <Hero />
      <div>
        Lipsum
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>s
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
