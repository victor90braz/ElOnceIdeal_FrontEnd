import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createrThunk } from "../../redux/thunks/playersThunks";
import { correctAction, wrongAction } from "../modals/modals";
import CreatorPlayerStyle from "./CreatorPlayerStyle";

const CreatorPlayer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blankFields = {
    name: "",
    image: "",
    speed: "",
    shoot: "",
    pass: "",
    agility: "",
    defense: "",
    strength: "",
  };

  const [formPlayer, setFormPlayer] = useState(blankFields);

  const buttonDisabled =
    formPlayer.name === "" ||
    formPlayer.image === "" ||
    formPlayer.speed === "" ||
    formPlayer.shoot === "" ||
    formPlayer.pass === "" ||
    formPlayer.agility === "" ||
    formPlayer.defense === "" ||
    formPlayer.strength === "";

  const changePlayerData = (event) => {
    setFormPlayer({ ...formPlayer, [event.target.id]: event.target.value });
  };

  const submitCreate = async (event) => {
    try {
      event.preventDefault();
      await dispatch(createrThunk(formPlayer));
      setFormPlayer(blankFields);
      correctAction("Nice!! Player created XD");
      navigate("/home");
    } catch (error) {
      wrongAction("Error to create your player. Try again!");
    }
  };

  return (
    <CreatorPlayerStyle>
      <h2>Create</h2>
      <form autoComplete="off" noValidate onSubmit={submitCreate}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={formPlayer.name}
          onChange={changePlayerData}
          placeholder="Name"
        />

        <label htmlFor="image">Image</label>
        <input
          type="url"
          id="image"
          value={formPlayer.image}
          onChange={changePlayerData}
          placeholder="Insert image URL"
        />

        <label htmlFor="speed">Speed</label>
        <input
          type="number"
          id="speed"
          value={formPlayer.speed}
          onChange={changePlayerData}
          placeholder="Insert speed"
        />

        <label htmlFor="shoot">Shoot</label>
        <input
          type="number"
          id="shoot"
          value={formPlayer.shoot}
          onChange={changePlayerData}
          placeholder="Insert shoot"
        />

        <label htmlFor="pass">Pass</label>
        <input
          type="number"
          id="pass"
          value={formPlayer.pass}
          onChange={changePlayerData}
          placeholder="Insert pass"
        />

        <label htmlFor="agility">Agility</label>
        <input
          type="number"
          id="agility"
          value={formPlayer.agility}
          onChange={changePlayerData}
          placeholder="Insert agility"
        />

        <label htmlFor="speed">Defense</label>
        <input
          type="number"
          id="defense"
          value={formPlayer.defense}
          onChange={changePlayerData}
          placeholder="Insert defense"
        />

        <label htmlFor="strength">Strength</label>
        <input
          type="number"
          id="strength"
          value={formPlayer.strength}
          onChange={changePlayerData}
          placeholder="Insert strength"
        />

        <button disabled={buttonDisabled} type="submit" className="form-button">
          Create
        </button>
      </form>
    </CreatorPlayerStyle>
  );
};

export default CreatorPlayer;
