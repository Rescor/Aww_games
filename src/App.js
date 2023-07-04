import './App.css';
import GameScreen from "./components/GameScreen/GameScreen";
import {useState} from "react";

import hubLogo from "./assets/hub.png";
import csLogo from "./assets/cs.png";
import hlLogo from "./assets/hl.svg";
import minecraftLogo from "./assets/minecraft.png";
import istarLogo from "./assets/2moons.png";
import wowLogo from "./assets/wow.svg";

const games = [
  {
    name: "Игровой хаб TLPE / 49406",
    logo: hubLogo,
    address: "games.aww.xyz",
    description: "",
    chat: "https://t.me/xen_rp",
    forumUrl: "https://forum.netstalking.ru/index.php?/forum/57-world-of-warcraft-legion-ксеногенезис/"
  },
  {
    name: "Minecraft",
    logo: minecraftLogo,
    address: "games.aww.xyz:25565",
    description: "",
    chat: "https://t.me/+WpCDUGWMmZ8wZjA6",
    forumUrl: "https://forum.netstalking.ru/index.php?/forum/47-minecraft/"
  },
  {
    name: "World of Warcraft: Legion",
    logo: wowLogo,
    address: "games.aww.xyz",
    description: "",
    chat: "https://t.me/xen_rp",
    forumUrl: "https://forum.netstalking.ru/index.php?/forum/57-world-of-warcraft-legion-ксеногенезис/"
  },
  {
    name: "CS",
    logo: csLogo,
    address: "games.aww.xyz:27015",
    connection: "steam://connect/IP",
    description: "",
    chat: "https://t.me/hldmx",
    forumUrl: "https://forum.netstalking.ru/index.php?/forum/45-half-life-cs-16/"
  },
  {
    name: "Half-Life: Deathmatch",
    logo: hlLogo,
    address: "games.aww.xyz:27016",
    connection: "steam://connect/IP",
    description: "",
    chat: "https://t.me/hldmx",
    forumUrl: "https://forum.netstalking.ru/index.php?/forum/45-half-life-cs-16/"
  },
  {
    name: "2Moons",
    logo: istarLogo,
    url: "https://istar.aww.xyz/",
    description: "2Moons - это браузерная космическая стратегия в реальном времени.",
    chat: "https://t.me/istarsx",
    forumUrl: "https://forum.netstalking.ru/index.php?/forum/48-2moons-istar/"
  },
]

function App() {
  const [currentScreen, setCurrentScreen] = useState("Игровой хаб TLPE / 49406")
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
