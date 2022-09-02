import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListPlayers from "../../components/ListPlayers/ListPlayers";
import { loadPlayersThunk } from "../../redux/thunks/playersThunks";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(loadPlayersThunk());
    })();
  }, [dispatch]);

  return (
    <HomePageStyled>
      <ListPlayers />
    </HomePageStyled>
  );
};

export default HomePage;
