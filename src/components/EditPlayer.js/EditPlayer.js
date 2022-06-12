import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editPlayerThunk } from "../../redux/thunks/playersThunks";
import CreatorPlayer from "../CreaterPlayer.js/CreatorPlayer";
import { correctAction, wrongAction } from "../modals/modals";
import EditPlayerStyle from "./EditPlayerStyle";

const EditPlayer = ({ editPlayer }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blankFields = {
    name: editPlayer ? editPlayer.name : "",
    image: editPlayer ? editPlayer.image : "",
    speed: editPlayer ? editPlayer.speed : "",
    shoot: editPlayer ? editPlayer.shoot : "",
    pass: editPlayer ? editPlayer.pass : "",
    agility: editPlayer ? editPlayer.agility : "",
    defense: editPlayer ? editPlayer.defense : "",
    strength: editPlayer ? editPlayer.strength : "",
  };

  const [formEditPlayer, setFormEditPlayer] = useState(blankFields);

  const buttonDisabled =
    formEditPlayer.name === "" ||
    formEditPlayer.image === "" ||
    formEditPlayer.speed === "" ||
    formEditPlayer.shoot === "" ||
    formEditPlayer.pass === "" ||
    formEditPlayer.agility === "" ||
    formEditPlayer.defense === "" ||
    formEditPlayer.strength === "";

  const editPlayerData = (event) => {
    setFormEditPlayer({
      ...formEditPlayer,
      [event.target.id]: event.target.value,
    });
  };

  const submitEdit = (event) => {
    try {
      event.preventDefault();

      if (editPlayer) {
        dispatch(editPlayerThunk(editPlayer.id, formEditPlayer));
        return;
      }

      dispatch(CreatorPlayer(formEditPlayer));
      setFormEditPlayer(blankFields);

      correctAction("Nice!! Player edited");

      navigate("/home");
    } catch (error) {
      wrongAction("Error to edit your player. Try again!");
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
          value={formEditPlayer.name}
          onChange={editPlayerData}
          placeholder="Name"
        />

        <label htmlFor="image">Image</label>
        <input
          type="url"
          id="image"
          value={formEditPlayer.image}
          onChange={editPlayerData}
          placeholder="Insert image URL"
        />

        <label htmlFor="speed">Speed</label>
        <input
          type="number"
          id="speed"
          value={formEditPlayer.speed}
          onChange={editPlayerData}
          placeholder="Insert speed"
        />

        <label htmlFor="shoot">Shoot</label>
        <input
          type="number"
          id="shoot"
          value={formEditPlayer.shoot}
          onChange={editPlayerData}
          placeholder="Insert shoot"
        />

        <label htmlFor="pass">Pass</label>
        <input
          type="number"
          id="pass"
          value={formEditPlayer.pass}
          onChange={editPlayerData}
          placeholder="Insert pass"
        />

        <label htmlFor="agility">Agility</label>
        <input
          type="number"
          id="agility"
          value={formEditPlayer.agility}
          onChange={editPlayerData}
          placeholder="Insert agility"
        />

        <label htmlFor="speed">Defense</label>
        <input
          type="number"
          id="defense"
          value={formEditPlayer.defense}
          onChange={editPlayerData}
          placeholder="Insert defense"
        />

        <label htmlFor="strength">Strength</label>
        <input
          type="number"
          id="strength"
          value={formEditPlayer.strength}
          onChange={editPlayerData}
          placeholder="Insert strength"
        />

        <button
          disabled={buttonDisabled}
          type="submit"
          className="form-button"
          value={editPlayer ? "edit" : "create"}
        >
          Edit
        </button>
      </form>
    </EditPlayerStyle>
  );
};

export default EditPlayer;
