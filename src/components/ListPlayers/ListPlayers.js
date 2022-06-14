import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Player from "../Player/Player";
import ListPlayersStyles from "./ListPlayersStyles";

const ListPlayers = () => {
  const { allPlayers } = useSelector((status) => status.player);

  return (
    <ListPlayersStyles>
      <h3>LET'S START MAKING A LIST OF PLAYERS</h3>
      <div className="container-element">
        <button>
          <NavLink to="/create">
            <div className="container-image">
              <img
                src="https://www.vhv.rs/dpng/d/276-2761848_user-plus-user-user-add-profile-avatar-person.png"
                alt="Create a new player card"
              />
            </div>
          </NavLink>
        </button>
      </div>

      {allPlayers.map((player) => (
        <Player player={player} key={player.id} />
      ))}
    </ListPlayersStyles>
  );
};

export default ListPlayers;
