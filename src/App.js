import './Stylesheets/App.css';
import Shop from './Components/Shop.js';
import Clicker from './Components/Clicker.js';
import GameLoop from './Components/GameLoop.js';

function App() {

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
