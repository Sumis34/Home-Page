import './App.scss';
import React, { useEffect } from 'react';
import Router from './components/Router/Router'
import favBright from './assets/images/nk-logo_bright.png'
import favDark from './assets/images/nk-logo_dark.png'


function App() {
  useEffect(() => {
    const faviconUpdate = async () => {
      //grab favicon element by ID
      const favicon = document.getElementById("favicon");
      //Check browser theme test
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        favicon.href = favBright;
      }

      else {
        favicon.href = favDark;
      }
    };

    faviconUpdate();
  });
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
