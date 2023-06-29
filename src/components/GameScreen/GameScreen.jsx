import InfoSection from "./InfoSection/InfoSection";
import styles from "./GameScreen.module.css";
import {useState} from "react";

export default function GameScreen(props) {
  const [activeScreen, setActiveScreen] = useState(styles.csScreen)
  function click() {
    setActiveScreen(styles.hlScreen)
  }

  return <div className={styles.gameScreen + " " + activeScreen}>
    <h1>{props.screen}</h1>
    <button onClick={click}>CHANGE SCREEN</button>
    <div className={styles.about}>
      <InfoSection />
    </div>
    </div>
}