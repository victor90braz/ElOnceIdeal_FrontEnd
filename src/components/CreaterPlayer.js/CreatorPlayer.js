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

  const submitCreate = (event) => {
    try {
      event.preventDefault();

      dispatch(
        createrThunk({
          name: formPlayer.name,
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
      <form autoComplete="off" noValidate onSubmit={submitCreate}>
        <h2>New Player</h2>
        <ul>
          <div className="block-list-left">
            <li>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formPlayer.name}
                onChange={changePlayerData}
                placeholder="Name"
              />
            </li>

            <li>
              <label htmlFor="image">Image</label>
              <input
                type="url"
                id="image"
                value={formPlayer.image}
                onChange={changePlayerData}
                placeholder="Insert image URL"
              />
            </li>

            <li>
              <label htmlFor="speed">Speed</label>
              <input
                type="number"
                id="speed"
                value={formPlayer.speed}
                onChange={changePlayerData}
                placeholder="Insert speed"
              />
            </li>

            <li>
              <label htmlFor="shoot">Shoot</label>
              <input
                type="number"
                id="shoot"
                value={formPlayer.shoot}
                onChange={changePlayerData}
                placeholder="Insert shoot"
              />
            </li>
          </div>

          <div className="block-list-right">
            <li>
              <label htmlFor="pass">Pass</label>
              <input
                type="number"
                id="pass"
                value={formPlayer.pass}
                onChange={changePlayerData}
                placeholder="Insert pass"
              />
            </li>

            <li>
              <label htmlFor="agility">Agility</label>
              <input
                type="number"
                id="agility"
                value={formPlayer.agility}
                onChange={changePlayerData}
                placeholder="Insert agility"
              />
            </li>

            <li>
              <label htmlFor="defense">Defense</label>
              <input
                type="number"
                id="defense"
                value={formPlayer.defense}
                onChange={changePlayerData}
                placeholder="Insert defense"
              />
            </li>

            <li>
              <label htmlFor="strength">Strength</label>
              <input
                type="number"
                id="strength"
                value={formPlayer.strength}
                onChange={changePlayerData}
                placeholder="Insert strength"
              />
            </li>
          </div>
        </ul>

        <button disabled={buttonDisabled} type="submit" className="form-button">
          Create
        </button>
      </form>
    </CreatorPlayerStyle>
  );
};

export default CreatorPlayer;
