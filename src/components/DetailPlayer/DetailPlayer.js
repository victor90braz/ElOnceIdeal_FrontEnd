import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlayerThunk } from "../../redux/thunks/playersThunks";

import DetailPlayerStyle from "./DetailPlayerStyle";

const DetailPlayer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { player: allPlayers } = useSelector((state) => state.player);

  useEffect(() => {
    dispatch(getPlayerThunk(id));
  }, [dispatch, id]);

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
                      Ronaldo começou a jogar futebol aos oito anos de idade nas
                      categorias de base do Clube Futebol Andorinha de Santo
                      António, time modesto da ilha da Madeira.
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
