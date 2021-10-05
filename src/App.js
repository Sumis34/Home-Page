import './App.scss';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'
import Router from './components/Router/Router'


function App() {

  useEffect(() => {
    const faviconUpdate = async () => {
      //grab favicon element by ID
      const favicon = document.getElementById("favicon");
      //Check browser theme
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        favicon.href = "./assets/images/nk-logo_bright.png";
        console.log("Dark");
      }

      else {
        favicon.href = "./assets/images/nk-logo_dark.png";
        console.log("Light");
      }
    };

    faviconUpdate();
  });

  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
