import { useSelector } from "react-redux";
import Player from "../Player/Player";
import ListPlayersStyles from "./ListPlayersStyles";

const ListPlayers = () => {
  const { allPlayers } = useSelector((status) => status.player);

  return (
    <ListPlayersStyles>
      <h3>Squad Builder</h3>

      {allPlayers.map((player, index) => (
        <Player player={player} key={index} />
      ))}
    </ListPlayersStyles>
  );
};

export default ListPlayers;
