/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { blankStateActionCreator } from "../../redux/features/playerSlice";
import {
  deletePlayerThunk,
  getPlayerThunk,
} from "../../redux/thunks/playersThunks";
import { correctAction } from "../modals/modals";
import { TiDelete } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
import DetailPlayerStyle from "./DetailPlayerStyle";

const DetailPlayer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { player: allPlayers } = useSelector((state) => state.player);

  const handleDelete = () => {
    dispatch(deletePlayerThunk(id));
    correctAction(`${allPlayers.name} has been deleted`);
    navigate(`/home`);
  };

  const handleEdit = () => {
    dispatch(getPlayerThunk(id));
    dispatch(blankStateActionCreator());
    navigate(`/edit/${id}`);
  };

  useEffect(() => {
    (async () => {
      dispatch(getPlayerThunk(id));
    })();
  }, [dispatch, id]);

  return (
    <DetailPlayerStyle>
      <div className="container-settings">
        <button onClick={handleEdit} className="button-edit">
          <FiEdit size={35} />
        </button>

        <button onClick={handleDelete} className="button-remove">
          <TiDelete size={50} />
        </button>
      </div>
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
