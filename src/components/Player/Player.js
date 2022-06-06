import PlayerStyles from "./PlayerStyles";

const Player = ({ player: { name, image, username } }) => {
  return (
    <PlayerStyles className="player">
      <h2>Goalkeeper</h2>
      <div className="player_info">
        <li>{name}</li>
        <li>{image}</li>
        <li>{username}</li>
      </div>
    </PlayerStyles>
  );
};

export default Player;
