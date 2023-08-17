import GameTile from "./GameTile/GameTile";
import styles from "./GameSelector.module.css";

export default function GameSelector(props) {
  const allGames = props.games.map(game => (
      <GameTile
        key={game.id}
        game={game.id}
        logo={game.logo}
        changeScreen={clickHandler}
        isActive={game.id == props.activeScreen ? true: false} />
    ))

    function clickHandler(game) {
      props.changeScreen(game)
    }
  return(
    <div className={styles.gameSelector}>
        {[...allGames]}
    </div>
  )
}
