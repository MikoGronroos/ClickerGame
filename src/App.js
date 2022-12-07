import './Stylesheets/App.css';
import Shop from './Components/Shop.js';
import Clicker from './Components/Clicker.js';
import GameLoop from './Components/GameLoop.js';
import {SaveCookies, LoadCookies} from './Components/Save.js';

function App() {
  GameLoop();
  return (
    <>
      <h1>Industrial Clicker</h1>
      <Clicker/>
      <Shop/>
      <button onClick={SaveCookies}>Save</button>
      <button onClick={LoadCookies}>Load</button>
    </>
  );
}

export default App;
