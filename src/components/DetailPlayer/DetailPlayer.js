import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addPlayerActionCreator } from "../../redux/features/playerSlice";
import {
  deletePlayerThunk,
  getPlayerThunk,
} from "../../redux/thunks/playersThunks";

import DetailPlayerStyle from "./DetailPlayerStyle";

const DetailPlayer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { player: allPlayers } = useSelector((state) => state.player);

  useEffect(() => {
    dispatch(getPlayerThunk(id));
  }, [dispatch, id]);

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(addPlayerActionCreator(id));
    dispatch(deletePlayerThunk(id));
  };

  return (
    <DetailPlayerStyle>
      <ul>
        <li>
          <div className="container-card">
            <div className="card">
              <div className="image-box">
                <img src={allPlayers.image} alt={allPlayers.name} />
              </div>

              <div className="content">
                <div className="details">
                  <h2>
                    {allPlayers.name} <br />
                    <span>
                      Cristiano Ronaldo começou a jogar futebol aos oito anos de
                      idade nas categorias de base do Clube Futebol Andorinha de
                      Santo António, time modesto da ilha da Madeira. Em 1995, o
                      craque português assinou por outro clube local, o Clube
                      Desportivo Nacional, um time pouco mais conhecido na
                      região. Após 2 anos nas categorias de base do Nacional, o
                      gajo foi jogar nas categorias de base do Sporting Clube de
                      Portugal, antes de se transferir para o Manchester United,
                      Real Madrid, Juventus e agora retornar ao Manchester
                      United.
                    </span>
                  </h2>
                  <div className="data">
                    <div className="data-row">
                      <h3>
                        {allPlayers.speed} <br /> <span>SPEED</span>
                      </h3>
                      <h3>
                        {allPlayers.shoot} <br /> <span>SHOOT</span>
                      </h3>
                      <h3>
                        {allPlayers.pass} <br /> <span>PASS</span>
                      </h3>
                    </div>
                    <div className="data-row">
                      <h3>
                        {allPlayers.agility} <br /> <span>AGILITY</span>
                      </h3>
                      <h3>
                        {allPlayers.defense} <br /> <span>DEFENSE</span>
                      </h3>
                      <h3>
                        {allPlayers.strength} <br /> <span>STRENGHT</span>
                      </h3>
                    </div>
                  </div>
                  <div className="actionButton">
                    <button onClick={handleDelete}>DELETE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </DetailPlayerStyle>
  );
};

export default DetailPlayer;
