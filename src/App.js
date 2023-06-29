import './App.css';
import GameScreen from "./components/GameScreen/GameScreen";
import {useState} from "react";

import csLogo from "./assets/cs.png";
import hlLogo from "./assets/hl.svg";
import minecraftLogo from "./assets/minecraft.png";
import istarLogo from "./assets/2moons.png"

const games = [
  {
    name: "Minecraft",
    logo: minecraftLogo,
    address: "games.aww.xyz:25565",
    description: "",
    chat: "",
    forumUrl: "https://forum.netstalking.ru/index.php?/forum/47-minecraft/"
  },
  {
    name: "CS",
    logo: csLogo,
    address: "games.aww.xyz:27015",
    connection: "steam://connect/IP",
    description: "",
    chat: "",
    forumUrl: "https://forum.netstalking.ru/index.php?/forum/47-minecraft/"
  },
  {
    name: "Half-Life: Deathmatch",
    logo: hlLogo,
    address: "games.aww.xyz:27016",
    connection: "steam://connect/IP",
    description: "",
    chat: "",
    forumUrl: "https://forum.netstalking.ru/index.php?/forum/47-minecraft/"
  },
  {
    name: "2Moons",
    logo: istarLogo,
    url: "https://istar.aww.xyz/",
    description: "",
    chat: "",
    forumUrl: "https://forum.netstalking.ru/index.php?/forum/47-minecraft/"
  },
]

function App() {
  const [currentScreen, setCurrentScreen] = useState("Minecraft")
  return (
    <div className="App">
      <GameScreen
        games={games}
        screen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />
    </div>
  );
}

export default App;
