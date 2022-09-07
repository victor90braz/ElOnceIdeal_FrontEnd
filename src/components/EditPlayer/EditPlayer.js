import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { blankStateActionCreator } from "../../redux/features/playerSlice";
import { editPlayerThunk } from "../../redux/thunks/playersThunks";
import { correctAction } from "../modals/modals";
import { MdImageSearch, MdOndemandVideo } from "react-icons/md";
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
    <EditPlayerStyle>
      <form autoComplete="off" noValidate onSubmit={submitEdit}>
        <h2>EDIT PLAYER</h2>
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
        <label htmlFor="image">
          <a
            href="https://www.futwiz.com/en/fifa22/custom-player"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <MdImageSearch size={40} className="icon" />

              <h3>Follow the steps:</h3>
              <ul>
                <li>Click in the icon above and choose the player image;</li>
                <li>Open the image in a new tab and copy the URL;</li>
                <li>
                  URL: https://www.futwiz.com/assets/img/fifa22/faces/158023.png
                </li>
              </ul>
            </p>
          </a>
        </label>

        <input
          id="image"
          type="url"
          value={valuePlayer.image}
          onChange={editPlayerData}
          className="inputbox"
          name="image"
          placeholder="https://www.futwiz.com/assets/img/fifa22/faces/158023.png"
          required
        />

        <label htmlFor="video">
          <a
            href="https://www.youtube.com/watch?v=rq3BQAy4B5Q&ab_channel=MagicalMessi"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <MdOndemandVideo size={40} className="icon" />
            </p>
          </a>
        </label>

        <h3>Follow the steps:</h3>
        <ul>
          <li>Click in the icon above to open Youtube; </li>
          <li>Select your player and click in sharevideo;</li>
          <li>Copy the Embled ID:</li>
          <li>
            https://youtu.be/
            <span>6zQy_O3NoJU</span>
          </li>
        </ul>

        <input
          id="video"
          type="text"
          value={valuePlayer.video}
          onChange={editPlayerData}
          className="inputbox"
          name="video"
          required
          placeholder="Click in sharevideo and copy the ID"
        />

        <p className="container">
          <iframe
            className="responsive-iframe"
            src={`https://www.youtube.com/embed/${valuePlayer.video}`}
            title="YouTube video player"
          />
        </p>

        <label htmlFor="perfil">Perfil</label>
        <textarea
          id="perfil"
          value={valuePlayer.perfil}
          onChange={editPlayerData}
          className="inputbox"
          name="perfil"
          required
          rows="6"
          cols="50"
        />
        <h3>Player Skills</h3>
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
    </EditPlayerStyle>
  );
};

export default EditPlayer;
