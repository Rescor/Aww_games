import InfoSection from "./InfoSection/InfoSection";
import styles from "./GameScreen.module.css";
import GameSelector from "./GameSelector/GameSelector";
import {useState} from "react";

export default function GameScreen(props) {
  let activeScreen;
  let activeGame;
  console.log(props.games)

  if (props.screen === "Игровой хаб TLPE / 49406") {
    activeScreen = styles.hubScreen;
    activeGame = props.games[0];
  }
  if (props.screen === "Minecraft") {
    activeScreen = styles.minecraftScreen;
    activeGame = props.games[1];
  }
  if (props.screen === "World of Warcraft: Legion") {
    activeScreen = styles.legionScreen;
    activeGame = props.games[2];
  }
  if (props.screen === "CS") {
    activeScreen = styles.csScreen;
    activeGame = props.games[3];
  }
  if (props.screen === "Half-Life: Deathmatch") {
    activeScreen = styles.hlScreen;
    activeGame = props.games[4];
  }
  if (props.screen === "2Moons") {
    activeScreen = styles.istarScreen;
    activeGame = props.games[5];
  }

  return <>
    <div className={styles.gameScreenWrapper + " " + activeScreen}>
      <div className={styles.infoSection}>
        <p className={styles.title}>{props.screen}</p>
        <InfoSection game={activeGame} />
      </div>
      <GameSelector games={props.games} changeScreen={props.setCurrentScreen} activeScreen={props.screen} />
    </div>
  </>

}
