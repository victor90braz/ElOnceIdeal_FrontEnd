import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { blankStateActionCreator } from "../../redux/features/playerSlice";
import { editPlayerThunk } from "../../redux/thunks/playersThunks";
import { correctAction } from "../modals/modals";
import EditPlayerStyle from "./EditPlayerStyle";

const EditPlayer = () => {
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
    valuePlayer.strength === "";

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
        })
      );

      dispatch(blankStateActionCreator());
      correctAction(`${valuePlayer.name} has been edited successfully`);
      navigate("/home");
    }
  };

  return (
    <EditPlayerStyle>
      <h2>Edit Card</h2>
      <form autoComplete="off" noValidate onSubmit={submitEdit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={valuePlayer.name}
          onChange={editPlayerData}
          placeholder="Name"
        />

        <label htmlFor="image">Image</label>
        <input
          type="url"
          id="image"
          value={valuePlayer.image}
          onChange={editPlayerData}
          placeholder="Insert image URL"
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

        <button
          disabled={buttonDisabled}
          type="submit"
          className="form-button"
          value={player}
        >
          Edit
        </button>
      </form>
    </EditPlayerStyle>
  );
};

export default EditPlayer;
