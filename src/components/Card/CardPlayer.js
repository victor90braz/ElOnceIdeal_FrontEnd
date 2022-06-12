import { useDispatch } from "react-redux";
import { deletePlayerThunk } from "../../redux/thunks/playersThunks";

import CardPlayerStyle from "./CardPlayerStyle";

const CardPlayer = ({
  player: { name, image, speed, shoot, pass, agility, defense, strength, id },
}) => {
  const dispatch = useDispatch();

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deletePlayerThunk(id));
  };

  return (
    <CardPlayerStyle>
      <ul>
        <li>
          <div className="container-card">
            <div className="card">
              <div className="image-box">
                <img src={image} alt={name} />
              </div>

              <div className="content">
                <div className="details">
                  <h2>
                    {name} <br /> <span> ABOUT PLAYER </span>
                  </h2>
                  <div className="data">
                    <div className="data-row">
                      <h3>
                        {speed} <br /> <span>SPEED</span>
                      </h3>
                      <h3>
                        {shoot} <br /> <span>SHOOT</span>
                      </h3>
                      <h3>
                        {pass} <br /> <span>PASS</span>
                      </h3>
                    </div>
                    <div className="data-row">
                      <h3>
                        {agility} <br /> <span>AGILITY</span>
                      </h3>
                      <h3>
                        {defense} <br /> <span>DEFENSE</span>
                      </h3>
                      <h3>
                        {strength} <br /> <span>STRENGHT</span>
                      </h3>
                    </div>
                  </div>
                  <div className="actionButton">
                    <button className="btn_delete" onClick={handleDelete}>
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </CardPlayerStyle>
  );
};

export default CardPlayer;
