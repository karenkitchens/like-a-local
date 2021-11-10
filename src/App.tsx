import React from 'react';
import logo from './logo.png';
import './App.css';

// get our fontawesome imports
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Like a L<FontAwesomeIcon icon={faMapMarkerAlt} />cal
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
