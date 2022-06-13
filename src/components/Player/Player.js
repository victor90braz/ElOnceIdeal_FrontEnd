import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { blankStateActionCreator } from "../../redux/features/playerSlice";
import {
  deletePlayerThunk,
  getPlayerThunk,
} from "../../redux/thunks/playersThunks";
import PlayerStyles from "./PlayerStyles";

const Player = ({
  player: { name, image, speed, shoot, pass, agility, defense, strength, id },
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate(`/detail/${id}`);
  };

  const handleDelete = () => {
    dispatch(deletePlayerThunk(id));
    navigate(`/home`);
  };

  const handleEdit = () => {
    dispatch(getPlayerThunk(id));
    dispatch(blankStateActionCreator());
    navigate(`/edit/${id}`);
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
      <div className="container-element">
        <button className="elemento-icon" onClick={handleAdd}>
          detail
        </button>
        <button className="elemento-icon" onClick={handleDelete}>
          delete
        </button>
        <button className="elemento-icon" onClick={handleEdit}>
          edit
        </button>
      </div>
    </PlayerStyles>
  );
};

export default Player;
