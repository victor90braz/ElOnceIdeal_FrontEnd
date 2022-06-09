import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListPlayers from "../../components/ListPlayers/ListPlayers";

import { loadPlayersThunk } from "../../redux/thunks/playersThunks";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlayersThunk());
  }, [dispatch]);

  return (
    <>
      <h2>Make your dream team</h2>
      <ListPlayers />
    </>
  );
};

export default HomePage;
