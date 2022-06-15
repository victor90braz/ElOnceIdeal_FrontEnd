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
    <>
      <HomePageStyled>
        <h1>El Once Ideal</h1>
        <ListPlayers />
      </HomePageStyled>
    </>
  );
};

export default HomePage;
