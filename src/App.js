import { useState } from "react";
import GameScreen from "./components/GameScreen/GameScreen";
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
    name: "Энтропия",
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
    name: "Ксеногенезис",
    logo: wowLogo,
    address: "games.aww.xyz",
    links: [
      {name: "Создать аккаунт", url: "https://t.me/xen_rp_bot"},
      {name: "Гайд по подключению", url: "https://forum.netstalking.ru/index.php?/topic/408-как-начать-играть-гайд-по-подключению/"},
      {name: "Чат", url: "https://t.me/xen_rp"},
      {name: "Форум", url: "https://forum.netstalking.ru/index.php?/forum/57-world-of-warcraft-legion-ксеногенезис/"},
    ],
    subtitle: "Игровой сервер World of Warcraft: Legion",
    description: "Версия игры: 7.3.5 (build 26124)",
  },
  {
    name: "Симург",
    logo: hlLogo,
    address: "games.aww.xyz:27016",
    links: [
      {name: "Чат", url: "https://t.me/hldmx"},
      {name: "Форум", url: "https://forum.netstalking.ru/index.php?/forum/45-half-life-cs-16/"},
      {name: "Быстрое подключение (Steam)", url: "steam://connect/games.aww.xyz:27016"},
    ],
    subtitle: "Игровой сервер Half-Life: Deathmatch",
    description: "Поддерживаются любые игровые клиенты.",
    secondDescription: "Карты: crossfire, subtransit, bounce, datacore, rapidcore."
  },
  {
    name: "Интерлюдия",
    logo: csLogo,
    address: "games.aww.xyz:27015",
    links: [
      {name: "Чат", url: "https://t.me/hldmx"},
      {name: "Форум", url: "https://forum.netstalking.ru/index.php?/forum/45-half-life-cs-16/"},
      {name: "Быстрое подключение (Steam)", url: "steam://connect/games.aww.xyz:27015"},
    ],
    subtitle: "Игровой сервер Counter-Strike: 1.6",
    description: "Поддерживаются любые игровые клиенты.",
    secondDescription: "Карты: cs_mansion, de_dust2, de_dust2_2x2, cs_assault, de_inferno, de_aztec, de_train, de_nuke, $2000$, fy_pool_day, aim_map.",
  },
  {
    name: "Иштар",
    logo: istarLogo,
    links: [
      {name: "Начать игру", url: "https://istar.aww.xyz/"},
      {name: "Чат", url: "https://t.me/istarsx"},
      {name: "Форум", url: "https://forum.netstalking.ru/index.php?/forum/48-2moons-istar/"},
    ],
    subtitle: "Игровой сервер браузерной игры 2Moons",
    description: "2Moons - это браузерная космическая стратегия в реальном времени.",
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
