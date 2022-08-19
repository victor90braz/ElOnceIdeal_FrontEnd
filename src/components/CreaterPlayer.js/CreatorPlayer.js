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
    nationality: "",
    perfil: "",
    video: "",
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
    formPlayer.nationality === "" ||
    formPlayer.perfil === "" ||
    formPlayer.video === "" ||
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

  const submit = (event) => {
    try {
      event.preventDefault();

      dispatch(
        createrThunk({
          name: formPlayer.name,
          nationality: formPlayer.nationality,
          perfil: formPlayer.perfil,
          video: formPlayer.video,
          image: formPlayer.image,
          speed: formPlayer.speed,
          shoot: formPlayer.shoot,
          pass: formPlayer.pass,
          agility: formPlayer.agility,
          defense: formPlayer.defense,
          strength: formPlayer.strength,
        })
      );

      setFormPlayer(blankFields);
      correctAction(`Greate, ${formPlayer.name} has been added in the list.`);
      navigate("/home");
    } catch (error) {
      wrongAction(
        "Error! All fields are required. Please set a number between 1 to 99. Try again!"
      );
    }
  };

  return (
    <CreatorPlayerStyle>
      <form autoComplete="off" noValidate onSubmit={submit}>
        <h1>CheckOut</h1>
        <h2>Player Information</h2>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={formPlayer.name}
          onChange={changePlayerData}
          className="inputbox"
          name="name"
          required
        />
        <label htmlFor="nationality">Nationality</label>
        <input
          id="nationality"
          type="text"
          value={formPlayer.nationality}
          onChange={changePlayerData}
          className="inputbox"
          name="nationality"
          required
        />
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="text"
          value={formPlayer.image}
          onChange={changePlayerData}
          className="inputbox"
          name="image"
          required
        />

        <label htmlFor="video">Video</label>
        <input
          id="video"
          type="text"
          value={formPlayer.video}
          onChange={changePlayerData}
          className="inputbox"
          name="video"
          required
        />
        <label htmlFor="perfil">Perfil</label>
        <input
          id="perfil"
          type="textarea"
          value={formPlayer.perfil}
          onChange={changePlayerData}
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
              value={formPlayer.speed}
              onChange={changePlayerData}
              className="inputbox"
              name="speed"
              min="0"
              max="99"
              required
            />
            <output id="speed">{formPlayer.speed}</output>
          </li>
          <li>
            <label htmlFor="shoot">Shoot</label>
            <input
              id="shoot"
              type="range"
              value={formPlayer.shoot}
              onChange={changePlayerData}
              className="inputbox"
              name="shoot"
              min="0"
              max="99"
              required
            />
            <output id="shoot">{formPlayer.shoot}</output>
          </li>
          <li>
            <label htmlFor="pass">Pass</label>
            <input
              id="pass"
              type="range"
              value={formPlayer.pass}
              onChange={changePlayerData}
              className="inputbox"
              name="pass"
              min="0"
              max="99"
              required
            />
            <output id="pass">{formPlayer.pass}</output>
          </li>
          <li>
            <label htmlFor="agility">Agility</label>
            <input
              id="agility"
              type="range"
              value={formPlayer.agility}
              onChange={changePlayerData}
              className="inputbox"
              name="agility"
              min="0"
              max="99"
              required
            />
            <output id="agility">{formPlayer.agility}</output>
          </li>
          <li>
            <label htmlFor="defense">Defense</label>
            <input
              id="defense"
              type="range"
              value={formPlayer.defense}
              onChange={changePlayerData}
              className="inputbox"
              name="defense"
              min="0"
              max="99"
              required
            />
            <output id="defense">{formPlayer.defense}</output>
          </li>
          <li>
            <label htmlFor="strength">Strength</label>
            <input
              id="strength"
              type="range"
              value={formPlayer.strength}
              onChange={changePlayerData}
              className="inputbox"
              name="strength"
              min="0"
              max="99"
              required
            />
            <output id="strength">{formPlayer.strength}</output>
          </li>
        </ul>

        <button disabled={buttonDisabled} type="submit" className="button">
          Add New Player
        </button>
      </form>
    </CreatorPlayerStyle>
  );
};

export default CreatorPlayer;
