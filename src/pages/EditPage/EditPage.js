import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditPlayer from "../../components/EditPlayer.js/EditPlayer";
import { loadPlayersThunk } from "../../redux/thunks/playersThunks";
import EditPageContainer from "./EditPageStyles";

const EditPage = () => {
  const { noteId: playerId } = useParams();
  const { allPlayers } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlayersThunk());
  }, [dispatch]);

  const playerToEdit = allPlayers.find((player) => player.id === playerId);

  return (
    <>
      <EditPageContainer>
        <EditPlayer editPlayer={playerToEdit} />
      </EditPageContainer>
    </>
  );
};

export default EditPage;
