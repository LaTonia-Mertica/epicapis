import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Deblur } from "@mui/icons-material";

import "./Sexiest.scss";
import { style } from "../mui.js";
import nonbinary from "./images/nonbinary-representation-gap.png";

const Sexiest = ({ openModal, onClose }) => {
  // TODO how do we use the value in localstorage if it exists so when we reopen the modal, the selections are already made
  const [sexiestFSelection, setSexiestFSelection] = useState();
  const [sexiestMSelection, setSexiestMSelection] = useState();
  const [sexiestNSelection, setSexiestNSelection] = useState();

  const submit = () => {
    if (sexiestFSelection && sexiestMSelection && sexiestNSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestFSelection,
          sexiestMSelection,
          sexiestNSelection,
        })
      );
      console.log(sexiestFSelection, sexiestMSelection, sexiestNSelection);
    } else if (!sexiestMSelection && !sexiestNSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestFSelection,
        })
      );
      console.log(sexiestFSelection);
    } else if (!sexiestFSelection && !sexiestNSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestMSelection,
        })
      );
      console.log(sexiestMSelection);
    } else if (!sexiestFSelection && !sexiestMSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestNSelection,
        })
      );
      console.log(sexiestNSelection);
    } else if (!sexiestNSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestFSelection,
          sexiestMSelection,
        })
      );
      console.log(sexiestFSelection, sexiestMSelection);
    } else if (!sexiestMSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestFSelection,
          sexiestNSelection,
        })
      );
      console.log(sexiestFSelection, sexiestNSelection);
    } else if (!sexiestFSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestMSelection,
          sexiestNSelection,
        })
      );
      console.log(sexiestMSelection, sexiestNSelection);
    }
  };

  return (
    <main>
      <Modal
        open={openModal === "Sexiest"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="sexiestCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div className="fieldsetDiv">
            <fieldset
              onChange={(event) => {
                setSexiestFSelection(event.target.value);
              }}
            >
              <legend className="feminineLegend">Sexiest Feminine</legend>
              <p className="sexiestPara para1">
                <label htmlFor="catwoman">
                  <Deblur className="deblur" />
                  <input
                    type="radio"
                    name="feminine"
                    value="Catwoman"
                    id="catwoman"
                    title="image by pluspng.com"
                    selected={sexiestFSelection === "Catwoman"}
                    className="customIcon"
                  />
                  Catwoman
                </label>
              </p>
              <p className="sexiestPara para1">
                <label htmlFor="shera">
                  <Deblur className="deblur" />
                  <input
                    type="radio"
                    name="feminine"
                    value="She-Ra"
                    id="shera"
                    title="image by bluyou.deviantart.com"
                    selected={sexiestFSelection === "She-Ra"}
                    className="customIcon"
                  />
                  She-Ra
                </label>
              </p>
              <p className="sexiestPara para1">
                <label htmlFor="wonderwoman">
                  <Deblur className="deblur" />
                  <input
                    type="radio"
                    name="feminine"
                    value="Wonder Woman"
                    id="wonderwoman"
                    title="image by pinterest.com"
                    selected={sexiestFSelection === "Wonder Woman"}
                    className="customIcon"
                  />
                  Wonder Woman
                </label>
              </p>
            </fieldset>

            <fieldset
              onChange={(event) => {
                setSexiestMSelection(event.target.value);
              }}
            >
              <legend className="masculineLegend">Sexiest Masculine</legend>
              <p className="sexiestPara para2">
                <label htmlFor="batman">
                  <Deblur className="deblur" />
                  <input
                    type="radio"
                    name="masculine"
                    value="Batman"
                    id="batman"
                    title="image by pngplay.com"
                    selected={sexiestMSelection === "Batman"}
                    className="customIcon"
                  />
                  Batman
                </label>
                <br />
              </p>
              <p className="sexiestPara para2">
                <label htmlFor="blackpanther">
                  <Deblur className="deblur" />
                  <input
                    type="radio"
                    name="masculine"
                    value="Black Panther"
                    id="blackpanther"
                    title="image by clipart-library.com"
                    selected={sexiestMSelection === "Black Panther"}
                    className="customIcon"
                  />
                  Black Panther
                </label>
                <br />
              </p>
              <p className="sexiestPara para2">
                <label htmlFor="spiderman">
                  <Deblur className="deblur" />
                  <input
                    type="radio"
                    name="masculine"
                    value="Spider-Man"
                    id="spiderman"
                    selected={sexiestMSelection === "Spider-Man"}
                    className="customIcon"
                  />
                  Spider-Man
                </label>
                <br />
              </p>
            </fieldset>

            <fieldset
              onChange={(event) => {
                setSexiestNSelection(event.target.value);
              }}
            >
              <legend className="nonbinaryLegend">
                <a
                  href={nonbinary}
                  target="_blank"
                  rel="noreferrer"
                  title="download poster"
                  className="nonbinaryPoster"
                >
                  Sexiest Non Binary
                </a>
              </legend>
              <p className="sexiestPara para3">
                <label htmlFor="brotherken" title="no image accessible">
                  <Deblur className="deblur" />
                  <input
                    type="radio"
                    name="nonbinary"
                    value="Brother Ken"
                    id="brotherken"
                    selected={sexiestNSelection === "Brother Ken"}
                    className="customIcon"
                  />
                  Brother Ken
                </label>
                <br />
              </p>
              <p className="sexiestPara para3">
                <label htmlFor="kidquick">
                  <Deblur className="deblur" />
                  <input
                    type="radio"
                    name="nonbinary"
                    value="Kid Quick"
                    id="kidquick"
                    selected={sexiestNSelection === "Kid Quick"}
                    className="customIcon"
                  />
                  Kid Quick
                </label>
                <br />
              </p>
              <p className="sexiestPara para3">
                <label htmlFor="snowflake" title="no image accessible">
                  <Deblur className="deblur" />
                  <input
                    type="radio"
                    name="nonbinary"
                    value="Snow Flake"
                    id="snowflake"
                    selected={sexiestNSelection === "Snow Flake"}
                    className="customIcon"
                  />
                  Snow Flake
                </label>
                <br />
              </p>
            </fieldset>
          </div>
          <button type="submit" className="submitBtn" onClick={submit}>
            submit
          </button>
        </Box>
      </Modal>
    </main>
  );
};
export default Sexiest;

// IMAGE CREDITS

// pluspng.com: catwoman
// bluyou.deviantart.com: she-ra
// pinterest.com: wonder woman

// pngplay.com: batman
// clipart-library.com: black panther
// purepng.com: spider-man

// la'tonia mertica: brother ken
// glamurama.uol.com.br: kid quick
// la'tonia mertica: snow flake
