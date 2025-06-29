
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import About from './components/About';

function App() {



  const [mode, setMode] = useState('light');

  const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#042743';  // dark blue or black
    document.body.style.color = 'white';
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};
  return (

    <>
    {/* <Navbar title="TextUtils2"  aboutText="About TextUtils"/> */}

    <Navbar title="TextUtils2" toggleMode={toggleMode} mode={mode} />
     <div className="container my-3">
    <TextForm heading="Enter Text To Convert it into Upper or Lower Case"/>

    
    </div>
    </>
    
  );
}

export default App;
