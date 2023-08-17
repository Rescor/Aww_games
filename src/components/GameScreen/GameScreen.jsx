import InfoSection from "./InfoSection/InfoSection";
import GameSelector from "./GameSelector/GameSelector";
import styles from "./GameScreen.module.css";

export default function GameScreen(props) {
  let activeScreen;
  let activeGame;
  // TODO: Refactor this, replace screen styles in game objects, use game names as keys
  if (props.screen === "main") {
    activeScreen = styles.hubScreen;
    activeGame = props.games[0];
  }
  if (props.screen === "entropy") {
    activeScreen = styles.minecraftScreen;
    activeGame = props.games[1];
  }
  if (props.screen === "xenogenesis") {
    activeScreen = styles.legionScreen;
    activeGame = props.games[2];
  }
  if (props.screen === "simurgh") {
    activeScreen = styles.hlScreen;
    activeGame = props.games[3];
  }
  if (props.screen === "interlude") {
    activeScreen = styles.csScreen;
    activeGame = props.games[4];
  }
  if (props.screen === "istar") {
    activeScreen = styles.istarScreen;
    activeGame = props.games[5];
  }

  return <div className={styles.gameScreenWrapper + " " + activeScreen}>
    <p className={styles.title}>{activeGame.name}</p>
    <InfoSection game={activeGame} />
    <GameSelector games={props.games} changeScreen={props.setCurrentScreen} activeScreen={props.screen} />
  </div>

}
