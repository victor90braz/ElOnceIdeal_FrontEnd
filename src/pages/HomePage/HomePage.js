import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListPlayers from "../../components/ListPlayers/ListPlayers";
import { loadPlayersThunk } from "../../redux/thunks/playersThunks";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlayersThunk());
  }, [dispatch]);

  return (
    <HomePageStyled>
      <h3>LET'S START MAKING A LIST OF PLAYERS</h3>
      <ListPlayers />
    </HomePageStyled>
  );
};

export default HomePage;
