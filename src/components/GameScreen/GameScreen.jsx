import InfoSection from "./InfoSection/InfoSection";
import styles from "./GameScreen.module.css";
import GameSelector from "./GameSelector/GameSelector";

export default function GameScreen(props) {
  let activeScreen;
  if (props.screen === "CS") activeScreen = styles.csScreen;
  if (props.screen === "Half-Life: Deathmatch") activeScreen = styles.hlScreen;
  if (props.screen === "Minecraft") activeScreen = styles.minecraftScreen;
  if (props.screen === "2Moons") activeScreen = styles.istarScreen;

  return <>
    <div className={styles.gameScreenWrapper + " " + activeScreen}>
      <GameSelector games={props.games} changeScreen={props.setCurrentScreen} />
      <div className={styles.infoSection}>
        <p className={styles.title}>{props.screen}</p>
        <InfoSection />
      </div>
    </div>
  </>

}