import { useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import LanguageSelector from "./components/UI/LanguageSelector/LanguageSelector";
import GameScreen from "./components/GameScreen/GameScreen";
import hubLogo from "./assets/hub.png";
import csLogo from "./assets/cs.png";
import hlLogo from "./assets/hl.svg";
import minecraftLogo from "./assets/minecraft.png";
import istarLogo from "./assets/2moons.png";
import wowLogo from "./assets/wow.svg";

function App() {
  const [currentScreen, setCurrentScreen] = useState("main");
  const { t } = useTranslation();

  const games = [
    {
      name: t("hub.name"),
      id: "main",
      logo: hubLogo,
      links: [
        {name: t("hub.steam_link"), url: "https://steamcommunity.com/groups/tlpe/"},
        {name: t("hub.discord_link"), url: "https://discord.com/invite/kDygPTm"},
        {name: "tlpe.ru", url: "https://tlpe.ru/"},
        {name: "netstalking.ru", url: "https://netstalking.ru/"},
        {name: "aww.xyz", url: "https://aww.xyz/"},
      ],
      subtitle: t("hub.subtitle"),
      secondSubtitle: t("hub.second_subtitle"),
      description: t("hub.description"),
      secondDescription: t("hub.second_description")
    },
    {
      name: t("entropy.name"),
      id: "entropy",
      logo: minecraftLogo,
      address: "games.aww.xyz:25565",
      links: [
        {name: t("chat"), url: "https://t.me/+WpCDUGWMmZ8wZjA6"},
        {name: t("forum"), url: "https://forum.netstalking.ru/index.php?/forum/47-minecraft/"},
      ],
      subtitle: t("entropy.subtitle"),
      description: t("entropy.description"),
    },
    {
      name: t("xen.name"),
      id: "xenogenesis",
      logo: wowLogo,
      address: "games.aww.xyz",
      links: [
        {name: t("create_acc"), url: "https://t.me/xen_rp_bot"},
        {name: t("how_to_connect"), url: "https://forum.netstalking.ru/index.php?/topic/408-как-начать-играть-гайд-по-подключению/"},
        {name: t("chat"), url: "https://t.me/xen_rp"},
        {name: t("forum"), url: "https://forum.netstalking.ru/index.php?/forum/57-world-of-warcraft-legion-ксеногенезис/"},
      ],
      subtitle: t("xen.subtitle"),
      description: t("xen.description"),
    },
    {
      name: t("simurgh.name"),
      id: "simurgh",
      logo: hlLogo,
      address: "games.aww.xyz:27016",
      links: [
        {name: t("chat"), url: "https://t.me/hldmx"},
        {name: t("forum"), url: "https://forum.netstalking.ru/index.php?/forum/45-half-life-cs-16/"},
        {name: t("steam_qc"), url: "steam://connect/games.aww.xyz:27016"},
      ],
      subtitle: t("simurgh.subtitle"),
      description: t("simurgh.description"),
      secondDescription: t("simurgh.second_description")
    },
    {
      name: t("interlude.name"),
      id: "interlude",
      logo: csLogo,
      address: "games.aww.xyz:27015",
      links: [
        {name: t("chat"), url: "https://t.me/hldmx"},
        {name: t("forum"), url: "https://forum.netstalking.ru/index.php?/forum/45-half-life-cs-16/"},
        {name: t("steam_qc"), url: "steam://connect/games.aww.xyz:27015"},
      ],
      subtitle: t("interlude.subtitle"),
      description: t("interlude.description"),
      secondDescription: t("interlude.second_description"),
    },
    {
      name: t("istar.name"),
      id: "istar",
      logo: istarLogo,
      links: [
        {name: t("start_game"), url: "https://istar.aww.xyz/"},
        {name: t("chat"), url: "https://t.me/istarsx"},
        {name: t("forum"), url: "https://forum.netstalking.ru/index.php?/forum/48-2moons-istar/"},
      ],
      subtitle: t("istar.subtitle"),
      description: t("istar.description"),
    },
  ]

  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <GameScreen
          games={games}
          screen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
        <LanguageSelector />
      </div>
    </I18nextProvider>
  );
}

export default App;
