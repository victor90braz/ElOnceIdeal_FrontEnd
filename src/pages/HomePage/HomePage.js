import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListPlayers from "../../components/ListPlayers/ListPlayers";
import Navigation from "../../components/Navigation/Navigation";
import { loadPlayersThunk } from "../../redux/thunks/playersThunks";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlayersThunk());
  }, [dispatch]);

  return (
    <>
      <Navigation />

      <main>
        <h2>Make your dream team</h2>

        <h3>List of all players</h3>
        <ul>
          <ListPlayers />
        </ul>
      </main>
    </>
  );
};

export default HomePage;
