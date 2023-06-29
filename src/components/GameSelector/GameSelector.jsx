import GameTile from "./GameTile/GameTile";


export default function GameSelector(props) {
  const allGames = props.games.map(game => (
      <GameTile key={game.name} game={game.name} logo={game.logo} changeScreen={clickHandler} />
    ))

    function clickHandler(game) {
      props.changeScreen(game)
    }
  return(
    <div>
        {[...allGames]}
    </div>
  )
}
