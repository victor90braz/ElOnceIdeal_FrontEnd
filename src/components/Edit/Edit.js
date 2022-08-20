import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { blankStateActionCreator } from "../../redux/features/playerSlice";
import { editPlayerThunk } from "../../redux/thunks/playersThunks";
import { correctAction } from "../modals/modals";
import EditStyle from "./EditStyle";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { player } = useSelector((state) => state.player);

  const [valuePlayer, setFormEditPlayer] = useState(player);

  const buttonDisabled =
    valuePlayer.name === "" ||
    valuePlayer.image === "" ||
    valuePlayer.speed === "" ||
    valuePlayer.shoot === "" ||
    valuePlayer.pass === "" ||
    valuePlayer.agility === "" ||
    valuePlayer.defense === "" ||
    valuePlayer.strength === "" ||
    valuePlayer.video === "" ||
    valuePlayer.perfil === "" ||
    valuePlayer.nationality === "";

  const editPlayerData = (event) => {
    setFormEditPlayer({
      ...valuePlayer,
      [event.target.id]: event.target.value,
    });
  };

  const submitEdit = (event) => {
    event.preventDefault();

    if (player) {
      dispatch(
        editPlayerThunk(valuePlayer.id, {
          name: valuePlayer.name,
          image: valuePlayer.image,
          speed: valuePlayer.speed,
          shoot: valuePlayer.shoot,
          pass: valuePlayer.pass,
          agility: valuePlayer.agility,
          defense: valuePlayer.defense,
          strength: valuePlayer.strength,
          video: valuePlayer.video,
          perfil: valuePlayer.perfil,
          nationality: valuePlayer.nationality,
        })
      );

      dispatch(blankStateActionCreator());
      correctAction(`${valuePlayer.name} has been edited successfully`);
      navigate("/home");
    }
  };

  return (
    <EditStyle>
      <form autoComplete="off" noValidate onSubmit={submitEdit}>
        <h2>CHANGE PLAYER</h2>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={valuePlayer.name}
          onChange={editPlayerData}
          className="inputbox"
          name="name"
          required
        />
        <label htmlFor="nationality">Nationality</label>
        <input
          id="nationality"
          type="text"
          value={valuePlayer.nationality}
          onChange={editPlayerData}
          className="inputbox"
          name="nationality"
          required
        />
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="text"
          value={valuePlayer.image}
          onChange={editPlayerData}
          className="inputbox"
          name="image"
          required
        />

        <label htmlFor="video">Video</label>
        <input
          id="video"
          type="text"
          value={valuePlayer.video}
          onChange={editPlayerData}
          className="inputbox"
          name="video"
          required
        />
        <label htmlFor="perfil">Perfil</label>
        <input
          id="perfil"
          type="textarea"
          value={valuePlayer.perfil}
          onChange={editPlayerData}
          className="inputbox"
          name="perfil"
          required
        />

        <h4>Player Skills</h4>

        <ul className="container-inputs">
          <li>
            <label htmlFor="speed">Speed</label>
            <input
              id="speed"
              type="range"
              value={valuePlayer.speed}
              onChange={editPlayerData}
              className="inputbox"
              name="speed"
              min="0"
              max="99"
              required
            />
            <output id="speed">{valuePlayer.speed}</output>
          </li>
          <li>
            <label htmlFor="shoot">Shoot</label>
            <input
              id="shoot"
              type="range"
              value={valuePlayer.shoot}
              onChange={editPlayerData}
              className="inputbox"
              name="shoot"
              min="0"
              max="99"
              required
            />
            <output id="shoot">{valuePlayer.shoot}</output>
          </li>
          <li>
            <label htmlFor="pass">Pass</label>
            <input
              id="pass"
              type="range"
              value={valuePlayer.pass}
              onChange={editPlayerData}
              className="inputbox"
              name="pass"
              min="0"
              max="99"
              required
            />
            <output id="pass">{valuePlayer.pass}</output>
          </li>
          <li>
            <label htmlFor="agility">Agility</label>
            <input
              id="agility"
              type="range"
              value={valuePlayer.agility}
              onChange={editPlayerData}
              className="inputbox"
              name="agility"
              min="0"
              max="99"
              required
            />
            <output id="agility">{valuePlayer.agility}</output>
          </li>
          <li>
            <label htmlFor="defense">Defense</label>
            <input
              id="defense"
              type="range"
              value={valuePlayer.defense}
              onChange={editPlayerData}
              className="inputbox"
              name="defense"
              min="0"
              max="99"
              required
            />
            <output id="defense">{valuePlayer.defense}</output>
          </li>
          <li>
            <label htmlFor="strength">Strength</label>
            <input
              id="strength"
              type="range"
              value={valuePlayer.strength}
              onChange={editPlayerData}
              className="inputbox"
              name="strength"
              min="0"
              max="99"
              required
            />
            <output id="strength">{valuePlayer.strength}</output>
          </li>
        </ul>

        <button disabled={buttonDisabled} type="submit" className="button">
          Set Player
        </button>
      </form>
    </EditStyle>
  );
};

export default Edit;
