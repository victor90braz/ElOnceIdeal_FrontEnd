import { useSelector } from "react-redux";
import PlayerCard from "../PlayerCard/PlayerCard";
import ListPlayersStyles from "./ListPlayersStyles";

const ListPlayers = () => {
  const { allPlayers } = useSelector((status) => status.player);

  return (
    <ListPlayersStyles>
      <h3>Squad Builder</h3>

      {allPlayers.map((player, index) => (
        <PlayerCard player={player} key={index} />
      ))}
    </ListPlayersStyles>
  );
};

export default ListPlayers;
