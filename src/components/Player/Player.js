import PlayerStyles from "./PlayerStyles";

const Player = ({
  player: { name, image, username, pac, sho, pass, dri, def, phy },
}) => {
  return (
    <PlayerStyles className="player">
      <h2>Make your dream team</h2>
      <ul className="player_info">
        <li>{name}</li>
        <li>
          <img src={image} alt={name} />
        </li>
        <li>{username}</li>
        <li>{pac}</li>
        <li>{sho}</li>
        <li>{pass}</li>
        <li>{dri}</li>
        <li>{def}</li>
        <li>{phy}</li>
      </ul>
    </PlayerStyles>
  );
};

export default Player;
