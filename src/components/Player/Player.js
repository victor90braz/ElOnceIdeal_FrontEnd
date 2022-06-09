import { useDispatch } from "react-redux";
import { deletePlayerThunk } from "../../redux/thunks/playersThunks";
import { correctAction } from "../modals/modals";
import PlayerStyles from "./PlayerStyles";

const Player = ({
  player: { name, image, speed, shoot, pass, agility, defense, strength, id },
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePlayerThunk(id));
    correctAction(`${name} Player has been deleted correctly`);
  };

  return (
    <PlayerStyles>
      <div className="card">
        <div className="player-name">
          <h2>{name}</h2>
        </div>
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <div className="card-content">
          <div className="card-content_details">
            <div className="data">
              <div className="data_props">
                <h3>SPEED {speed}</h3>
                <h3>SHOOT {shoot}</h3>
                <h3>PASS {pass}</h3>
              </div>
              <div className="data_props">
                <h3>AGILITY {agility}</h3>
                <h3>DEFENSE {defense}</h3>
                <h3>STRENGTH {strength}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-button">
        <button className="btn_delete" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </PlayerStyles>
  );
};

export default Player;
