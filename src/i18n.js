import { initReactI18next } from "react-i18next";
import i18n from "i18next";

function setLanguage() {
  let lang = localStorage.getItem('language');

  if (!lang) {
    const userLang = window.navigator.language.substring(0, 2);
    lang = userLang;
    localStorage.setItem("language", userLang);
  }
  if (lang !== "be" && lang !== "en" && lang !== "ru") {
    lang = "en";
    localStorage.setItem("language", "en");
  }

  return lang;
}

i18n.use(initReactI18next).init({
  resources: {
    be: {
      translation: {
        hub: {
          "name": "Гульнявы хаб TLPE / 49406",
          "subtitle": "Сардэчна запрашаем у гульнявы хаб!",
          "second_subtitle": "Гэта месца змяшчае спіс усіх нашых гульнявых сервераў.",
          "description": "Тут мы збіраемся разам і гуляем у што-небудзь вясёлае і прыемнае ٩(＾◡＾)۶",
          "second_description": "Далучайцеся да нас! Мы рады новым людзям =)",
          "steam_link": "Наша Steam-група",
          "discord_link": "Discord-сервер",
        },
        entropy: {
          "name": "Энтрапія",
          "subtitle": "Гульнявы сервер класічнай версіі Minecraft",
          "description": "Версія гульні: 1.19.2 Java",
        },
        xen: {
          "name": "Ксенагенез",
          "subtitle": "Гульнявы сервер World of Warcraft: Legion",
          "description": "Версія гульні: 7.3.5 (build 26124)",
        },
        simurgh: {
          "name": "Сiмург",
          "subtitle": "Гульнявы сервер Half-Life: Deathmatch",
          "description": "Падтрымліваюцца любыя гульнявыя кліенты.",
          "second_description": "Мапы: crossfire, subtransit, bounce, datacore, rapidcore.",
        },
        interlude: {
          "name": "Інтэрлюдыя",
          "subtitle": "Гульнявы сервер Counter-Strike: 1.6",
          "description": "Падтрымліваюцца любыя гульнявыя кліенты.",
          "second_description": "Мапы: cs_mansion, de_dust2, de_dust2_2x2, cs_assault, de_inferno, de_aztec, de_train, de_nuke, $2000$, fy_pool_day, aim_map.",
        },
        istar: {
          "name": "Іштар",
          "subtitle": "Гульнявы сервер браузэрнай гульні 2Moons",
          "description": "2Moons - гэта браўзэрная касмічная стратэгія ў рэальным часе.",
        },
        "server_address": "Адрас сервера: ",
        "chat": "Суполка",
        "forum": "Форум",
        "create_acc": "Стварыць рахунак",
        "start_game": "Пачаць гульню",
        "how_to_connect": "Як далучыцца",
        "steam_qc": "Хуткае падлучэнне (Steam)",
      }
    },
    ru: {
      translation: {
        hub: {
          "name": "Игровой хаб TLPE / 49406",
          "subtitle": "Добро пожаловать в игровой хаб!",
          "second_subtitle": "Это место содержит список всех наших игровых серверов.",
          "description": "Здесь мы собираемся вместе и играем во что-нибудь весёлое и приятное ٩(＾◡＾)۶",
          "second_description": "Присоединяйтесь к нам! Мы рады новым людям =)",
          "steam_link": "Наша Steam-группа",
          "discord_link": "Discord-сервер",
        },
        entropy: {
          "name": "Энтропия",
          "subtitle": "Игровой сервер классической версии Minecraft",
          "description": "Версия игры: 1.19.2 Java",
        },
        xen: {
          "name": "Ксеногенезис",
          "subtitle": "Игровой сервер World of Warcraft: Legion",
          "description": "Версия игры: 7.3.5 (build 26124)",
        },
        simurgh: {
          "name": "Симург",
          "subtitle": "Игровой сервер Half-Life: Deathmatch",
          "description": "Поддерживаются любые игровые клиенты.",
          "second_description": "Карты: crossfire, subtransit, bounce, datacore, rapidcore.",
        },
        interlude: {
          "name": "Интерлюдия",
          "subtitle": "Игровой сервер Counter-Strike: 1.6",
          "description": "Поддерживаются любые игровые клиенты.",
          "second_description": "Карты: cs_mansion, de_dust2, de_dust2_2x2, cs_assault, de_inferno, de_aztec, de_train, de_nuke, $2000$, fy_pool_day, aim_map.",
        },
        istar: {
          "name": "Иштар",
          "subtitle": "Игровой сервер браузерной игры 2Moons",
          "description": "2Moons - это браузерная космическая стратегия в реальном времени.",
        },
        "server_address": "Адрес сервера: ",
        "chat": "Чат",
        "forum": "Форум",
        "create_acc": "Создать аккаунт",
        "start_game": "Начать игру",
        "how_to_connect": "Гайд по подключению",
        "steam_qc": "Быстрое подключение (Steam)",
      }
    },
    en: {
      translation: {
        hub: {
          "name": "TLPE / 49406 Gaming Hub",
          "subtitle": "Welcome to the Gaming Hub!",
          "second_subtitle": "This place contains a list of all our game servers.",
          "description": "Here we get together and play something fun and enjoyable ٩(＾◡＾)۶",
          "second_description": "Join us! We welcome new people =)",
          "steam_link": "Our Steam group",
          "discord_link": "Discord Server",
        },
        entropy: {
          "name": "Entropy",
          "subtitle": "Minecraft (classic) Game Server",
          "description": "Game version: 1.19.2 Java",
        },
        xen: {
          "name": "Xenogenesis",
          "subtitle": "World of Warcraft: Legion Game Server",
          "description": "Game version: 7.3.5 (build 26124)",
        },
        simurgh: {
          "name": "Simurgh",
          "subtitle": "Half-Life: Deathmatch Game Server",
          "description": "Any game clients are supported.",
          "second_description": "Maps: crossfire, subtransit, bounce, datacore, rapidcore.",
        },
        interlude: {
          "name": "Interlude",
          "subtitle": "Counter-Strike: 1.6 Game Server",
          "description": "Any game clients are supported.",
          "second_description": "Maps: cs_mansion, de_dust2, de_dust2_2x2, cs_assault, de_inferno, de_aztec, de_train, de_nuke, $2000$, fy_pool_day, aim_map.",
        },
        istar: {
          "name": "Istar",
          "subtitle": "2Moons Game Server",
          "description": "2Moons is a real-time browser-based space strategy game.",
        },
        "server_address": "Server address: ",
        "chat": "Chat",
        "forum": "Forum",
        "create_acc": "Create account",
        "start_game": "Start game",
        "how_to_connect": "How to connect",
        "steam_qc": "Quick connection (Steam)",
      },
    },
  },
  lng: setLanguage(),
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
