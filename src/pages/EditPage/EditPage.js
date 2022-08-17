import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Edit from "../../components/Edit/Edit";
import { getPlayerThunk } from "../../redux/thunks/playersThunks";

const EditPage = () => {
  const { playerId } = useParams();
  const { player } = useSelector((state) => state.player);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayerThunk(playerId));
  }, [dispatch, playerId]);

  return <>{player.name && <Edit />}</>;
};

export default EditPage;
