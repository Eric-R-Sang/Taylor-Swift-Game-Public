import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  // React.StrictMode was making useEffect occur twice when state changed from "mainMenu" to "quiz."
  // Not really sure what it does or if it's necessary, so if somebody could explain that'd be great.

  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);


