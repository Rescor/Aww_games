import './App.css';
import GameSelector from "./components/GameSelector/GameSelector";
import GameScreen from "./components/GameScreen/GameScreen";
import {useState} from "react";

import csLogo from "./assets/cs.png";
import hlLogo from "./assets/hl.svg";
import minecraftLogo from "./assets/minecraft.png";
import istarLogo from "./assets/2moons.jpg"

const games = [
    {name: "CS", logo: csLogo},
    {name: "HL", logo: hlLogo},
    {name: "Minecraft", logo: minecraftLogo},
    {name: "2Moons", logo: istarLogo},
]

function App() {
    const [currentScreen, setCurrentScreen] = useState("CS")
  return (
    <div className="App">
      <div className="gameSelector">
          <GameSelector games={games} changeScreen={setCurrentScreen} />
      </div>
      <GameScreen screen={currentScreen} />
    </div>
  );
}

export default App;
