import { useDispatch } from "react-redux";
import ListPlayers from "../../components/ListPlayers/ListPlayers";
import { loadPlayersThunk } from "../../redux/thunks/playersThunks";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  const dispatch = useDispatch();

  dispatch(loadPlayersThunk());

  return (
    <HomePageStyled>
      <ListPlayers />
    </HomePageStyled>
  );
};

export default HomePage;
