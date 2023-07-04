import styles from "./GameTile.module.css";

export default function GameTile(props) {
  return <div className={styles.gameTile} onClick={() => props.changeScreen(props.game)}>
    <img src={props.logo} alt="" className={props.isActive ? styles.active : ""} />
  </div>
}