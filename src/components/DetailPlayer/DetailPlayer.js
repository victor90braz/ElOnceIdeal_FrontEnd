/* eslint-disable jsx-a11y/iframe-has-title */
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
                      {allPlayers.nationality} <br />
                    </span>
                  </h2>
                  <div className="data">
                    <div className="data-row">
                      <h3>{allPlayers.perfil}</h3>
                      <div className="video-responsive">
                        <iframe
                          width="853"
                          height="480"
                          src={`https://www.youtube.com/embed/${allPlayers.video}`}
                          frameBorder="0"
                          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                      </div>
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
