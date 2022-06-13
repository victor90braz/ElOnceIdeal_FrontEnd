import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditPlayer from "../../components/EditPlayer.js/EditPlayer";
import { getPlayerThunk } from "../../redux/thunks/playersThunks";
import EditPageContainer from "./EditPageStyles";

const EditPage = () => {
  const { playerId } = useParams();
  const { player } = useSelector((state) => state.player);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayerThunk(playerId));
  }, [dispatch, playerId]);

  return (
    <>
      <EditPageContainer>{player.name && <EditPlayer />}</EditPageContainer>
    </>
  );
};

export default EditPage;
