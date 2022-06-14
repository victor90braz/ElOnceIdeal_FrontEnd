import { useSelector } from "react-redux";
import Player from "../Player/Player";
import ListPlayersStyles from "./ListPlayersStyles";

const ListPlayers = () => {
  const { allPlayers } = useSelector((status) => status.player);

  return (
    <ListPlayersStyles>
      <h3>LET'S START MAKING A LIST OF PLAYERS</h3>

      {allPlayers.map((player) => (
        <Player player={player} key={player.id} />
      ))}
    </ListPlayersStyles>
  );
};

export default ListPlayers;
