import './Stylesheets/App.css';
import Shop from './Components/Shop.js';
import Clicker from './Components/Clicker.js';
import GameLoop from './Components/GameLoop.js';
import { useEffect } from 'react';

function App() {
  useEffect(() =>{

    window.onbeforeunload = function(){
    };

  });

  GameLoop();
  
  return (
    <>
      <h1>Industrial Clicker</h1>
      <Clicker/>
      <Shop/>
    </>
  );
}

export default App;
