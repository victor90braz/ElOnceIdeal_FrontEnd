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
        <label htmlFor="name">
          <h2>Name</h2>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={valuePlayer.name}
          onChange={editPlayerData}
        />

        <label htmlFor="nationality">
          <h3>Nationality</h3>
        </label>
        <input
          id="nationality"
          type="text"
          placeholder="Shoot"
          value={valuePlayer.nationality}
          onChange={editPlayerData}
        />

        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="text"
          placeholder="Image Url"
          value={valuePlayer.image}
          onChange={editPlayerData}
        />

        <label htmlFor="video">Video </label>
        <input
          id="video"
          type="text"
          placeholder="Nationality"
          value={valuePlayer.video}
          onChange={editPlayerData}
        />
        <label htmlFor="perfil">Perfil </label>
        <textarea
          id="perfil"
          name="textarea"
          rows="10"
          cols="50"
          value={valuePlayer.perfil}
          onChange={editPlayerData}
        />

        <br />
        <h4>Set Player Skills</h4>
        <small>Insert a value between 0 and 99</small>
        <br />

        <div className="container-inputs">
          <label htmlFor="speed">Speed</label>
          <input
            id="speed"
            type="range"
            value={valuePlayer.speed}
            onChange={editPlayerData}
            class="inputbox"
            name="speed"
            min="0"
            max="99"
            required
          />
          <output id="speed">{valuePlayer.speed}</output>
        </div>

        <div className="container-inputs">
          <label htmlFor="shoot">Shoot</label>
          <input
            id="shoot"
            type="range"
            value={valuePlayer.shoot}
            onChange={editPlayerData}
            class="inputbox"
            name="shoot"
            min="0"
            max="99"
            required
          />
          <output id="shoot">{valuePlayer.shoot}</output>
        </div>

        <div className="container-inputs">
          <label htmlFor="pass">Pass</label>
          <input
            id="pass"
            type="range"
            value={valuePlayer.pass}
            onChange={editPlayerData}
            class="inputbox"
            name="pass"
            min="0"
            max="99"
            required
          />
          <output id="pass">{valuePlayer.pass}</output>
        </div>

        <div className="container-inputs">
          <label htmlFor="agility">Agility</label>
          <input
            id="agility"
            type="range"
            value={valuePlayer.agility}
            onChange={editPlayerData}
            class="inputbox"
            name="agility"
            min="0"
            max="99"
            required
          />
          <output id="agility">{valuePlayer.agility}</output>
        </div>

        <div className="container-inputs">
          <label htmlFor="defense">Defense</label>
          <input
            id="defense"
            type="range"
            value={valuePlayer.defense}
            onChange={editPlayerData}
            class="inputbox"
            name="defense"
            min="0"
            max="99"
            required
          />
          <output id="defense">{valuePlayer.defense}</output>
        </div>

        <div className="container-inputs">
          <label htmlFor="strength">Strength</label>
          <input
            id="strength"
            type="range"
            value={valuePlayer.strength}
            onChange={editPlayerData}
            class="inputbox"
            name="strength"
            min="0"
            max="99"
            required
          />
          <output id="strength">{valuePlayer.strength}</output>
        </div>
        <input
          disabled={buttonDisabled}
          type="submit"
          className="form-button"
          value="Edit Player"
        />
      </form>
    </EditStyle>
  );
};

export default Edit;
