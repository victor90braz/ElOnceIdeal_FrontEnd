import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { blankStateActionCreator } from "../../redux/features/playerSlice";
import {
  deletePlayerThunk,
  getPlayerThunk,
} from "../../redux/thunks/playersThunks";
import { correctAction } from "../modals/modals";
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
    correctAction(`${name} has been deleted`);
    navigate(`/home`);
  };

  const handleEdit = () => {
    dispatch(getPlayerThunk(id));
    dispatch(blankStateActionCreator());
    navigate(`/edit/${id}`);
  };

  return (
    <PlayerStyles>
      <div className="container">
        <div className="card">
          <div className="photo">
            <img src={image} alt="Player" />
          </div>
          <div className="details">
            <h3 className="name">{name}</h3>
            <ul className="stats">
              <li>
                <span>{speed}</span> PAC
              </li>
              <li>
                <span>{shoot}</span> SHO
              </li>
              <li>
                <span>{pass}</span> PAS
              </li>
              <li>
                <span>{agility}</span> DRI
              </li>
              <li>
                <span>{defense}</span> DEF
              </li>
              <li>
                <span>{strength}</span> PHY
              </li>
            </ul>

            <div className="actions">
              <button onClick={handleAdd}>Detail</button>
              <button onClick={handleDelete}>Delete</button>
              <button onClick={handleEdit}>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </PlayerStyles>
  );
};

export default Player;
