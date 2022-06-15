import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListPlayers from "../../components/ListPlayers/ListPlayers";
import { loadPlayersThunk } from "../../redux/thunks/playersThunks";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  const dispatch = useDispatch();

  const players = useSelector((state) => state.player);

  useEffect(() => {
    dispatch(loadPlayersThunk());
  }, [dispatch, players]);

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
