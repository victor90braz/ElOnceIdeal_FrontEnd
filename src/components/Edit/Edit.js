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

        <label htmlFor="speed">Speed</label>
        <input
          type="number"
          id="speed"
          value={valuePlayer.speed}
          onChange={editPlayerData}
          min="1"
          max="99"
          required
          placeholder="Insert speed"
        />
        <label htmlFor="shoot">Shoot</label>
        <input
          type="number"
          id="shoot"
          value={valuePlayer.shoot}
          onChange={editPlayerData}
          min="1"
          max="99"
          required
          placeholder="Insert shoot"
        />
        <label htmlFor="pass">Pass</label>
        <input
          type="number"
          id="pass"
          value={valuePlayer.pass}
          onChange={editPlayerData}
          min="1"
          max="99"
          required
          placeholder="Insert pass"
        />
        <label htmlFor="agility">Agility</label>
        <input
          type="number"
          id="agility"
          value={valuePlayer.agility}
          onChange={editPlayerData}
          min="1"
          max="99"
          required
          placeholder="Insert agility"
        />
        <label htmlFor="defense">Defense</label>
        <input
          type="number"
          id="defense"
          value={valuePlayer.defense}
          onChange={editPlayerData}
          min="1"
          max="99"
          required
          placeholder="Insert defense"
        />
        <label htmlFor="strength">Strength</label>
        <input
          type="number"
          id="strength"
          value={valuePlayer.strength}
          onChange={editPlayerData}
          min="1"
          max="99"
          required
          placeholder="Insert strength"
        />
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
