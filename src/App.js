import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, { useState } from 'react';

function App() {
  const [theme, settheme] = useState("light")
  function changeTheme() {
    if (theme === "light") {
      settheme("dark")
    }
    else {
      settheme("light")
    }
  }
  return (
    <div className="App">
      <Navbar theme={theme} changeTheme={changeTheme} />
      <Form />
    </div>
  );
}

export default App;
