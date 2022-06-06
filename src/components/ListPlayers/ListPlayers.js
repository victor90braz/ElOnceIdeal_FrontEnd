import { useSelector } from "react-redux";
import Player from "../Player/Player";
import ListPlayersStyles from "./ListPlayersStyles";

const ListPlayers = () => {
  const { allPlayers } = useSelector((status) => status.player);

  return (
    <ListPlayersStyles>
      <h3>List of all players</h3>
      <ul>
        {allPlayers.map((player) => (
          <Player player={player} key={player.id} />
        ))}
      </ul>
    </ListPlayersStyles>
  );
};

export default ListPlayers;
