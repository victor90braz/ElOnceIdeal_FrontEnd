import PlayerStyles from "./PlayerStyles";

const Player = ({ player: { name, image, pac, sho, pass, dri, def, phy } }) => {
  return (
    <PlayerStyles>
      <div className="card">
        <div className="player-name">
          <h2>{name}</h2>
        </div>
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <div className="card-content">
          <div className="card-content_details">
            <div className="data">
              <div className="data_props">
                <h3>PAC {pac}</h3>
                <h3>SHO {sho}</h3>
                <h3>PASS {pass}</h3>
              </div>
              <div className="data_props">
                <h3>DRI {dri}</h3>
                <h3>DEF {def}</h3>
                <h3>PHY {phy}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PlayerStyles>
  );
};

export default Player;