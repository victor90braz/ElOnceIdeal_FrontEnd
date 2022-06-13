import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import EditPlayer from "../../components/EditPlayer.js/EditPlayer";
import { getPlayerThunk } from "../../redux/thunks/playersThunks";
import EditPageContainer from "./EditPageStyles";

const EditPage = () => {
  const { playerId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayerThunk(playerId));
  }, [dispatch, playerId]);

  return (
    <>
      <EditPageContainer>
        <EditPlayer />
      </EditPageContainer>
    </>
  );
};

export default EditPage;
