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
    links: [
      {name: "Наша Steam-группа", url: "https://steamcommunity.com/groups/tlpe/"},
      {name: "Discord-сервер", url: "https://discord.com/invite/kDygPTm"},
      {name: "tlpe.ru", url: "https://tlpe.ru/"},
      {name: "netstalking.ru", url: "https://netstalking.ru/"},
      {name: "aww.xyz", url: "https://aww.xyz/"},
    ],
    subtitle: "Добро пожаловать в игровой хаб!",
    secondSubtitle: "Это место содержит список всех наших игровых серверов.",
    description: "Здесь мы собираемся вместе и играем во что-нибудь весёлое и приятное :3",
    secondDescription: "Присоединяйтесь к нам! Мы рады новым людям =)"
  },
  {
    name: "Minecraft",
    realm: "",
    logo: minecraftLogo,
    address: "games.aww.xyz:25565",
    links: [
      {name: "Чат", url: "https://t.me/+WpCDUGWMmZ8wZjA6"},
      {name: "Форум", url: "https://forum.netstalking.ru/index.php?/forum/47-minecraft/"},
    ],
    subtitle: "Игровой сервер классической версии Minecraft",
    description: "Версия игры: 1.19.2 Java",
  },
  {
    name: "World of Warcraft: Legion",
    realm: "Ксеногенезис",
    logo: wowLogo,
    address: "games.aww.xyz",
    links: [
      {name: "Чат", url: "https://t.me/xen_rp"},
      {name: "Форум", url: "https://forum.netstalking.ru/index.php?/forum/57-world-of-warcraft-legion-ксеногенезис/"},
    ],
    subtitle: "Игровой сервер World of Warcraft: Legion",
    description: "Версия игры: 7.3.5 (build 26124)",
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
