import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Deblur } from "@mui/icons-material";

import "./Sexiest.scss";
import { style } from "../mui.js";

const Sexiest = ({ openModal, onClose }) => {
  // TODO how do we use the value in localstorage if it exists so when we reopen the modal, the selections are already made
  const [sexiestFSelection, setSexiestFSelection] = useState();
  const [sexiestMSelection, setSexiestMSelection] = useState();
  const [sexiestNSelection, setSexiestNSelection] = useState();

  const submit = () => {
    console.log(sexiestFSelection, sexiestMSelection, sexiestNSelection);
    if (sexiestFSelection || sexiestMSelection || sexiestNSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestMSelection,
          sexiestMSelection,
          sexiestNSelection,
        })
      );
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
                <input
                  type="radio"
                  name="feminine"
                  value="Catwoman"
                  id="catwoman"
                  title="image by pluspng.com"
                  selected={sexiestFSelection === "Catwoman"}
                />
                <Deblur className="deblur" />
                <label htmlFor="catwoman">Catwoman</label>
              </p>
              <p className="sexiestPara para1">
                <input
                  type="radio"
                  name="feminine"
                  value="She-Ra"
                  id="shera"
                  title="image by bluyou.deviantart.com"
                  selected={sexiestFSelection === "She-Ra"}
                />
                <Deblur className="deblur" />
                <label htmlFor="shera">She-Ra</label>
              </p>
              <p className="sexiestPara para1">
                <input
                  type="radio"
                  name="feminine"
                  value="Wonder Woman"
                  id="wonderwoman"
                  title="image by pinterest.com"
                  selected={sexiestFSelection === "Wonder Woman"}
                />
                <Deblur className="deblur" />
                <label htmlFor="wonderwoman">Wonder Woman</label>
              </p>
            </fieldset>

            <fieldset
              onChange={(event) => {
                setSexiestMSelection(event.target.value);
              }}
            >
              <legend className="masculineLegend">Sexiest Masculine</legend>
              <p className="sexiestPara para2">
                <input
                  type="radio"
                  name="masculine"
                  value="Batman"
                  id="batman"
                  title="image by pngplay.com"
                  selected={sexiestMSelection === "Batman"}
                />
                <Deblur className="deblur" />
                <label htmlFor="batman">Batman</label>
                <br />
              </p>
              <p className="sexiestPara para2">
                <input
                  type="radio"
                  name="masculine"
                  value="Black Panther"
                  id="blackpanther"
                  title="image by clipart-library.com"
                  selected={sexiestMSelection === "Black Panther"}
                />
                <Deblur className="deblur" />
                <label htmlFor="blackpanther">Black Panther</label>
                <br />
              </p>
              <p className="sexiestPara para2">
                <input
                  type="radio"
                  name="masculine"
                  value="Spider-Man"
                  id="spiderman"
                  selected={sexiestMSelection === "Spider-Man"}
                />
                <Deblur className="deblur" />
                <label htmlFor="spiderman">Spider-Man</label>
                <br />
              </p>
            </fieldset>

            <fieldset
              onChange={(event) => {
                setSexiestNSelection(event.target.value);
              }}
            >
              <legend className="nonbinaryLegend">Sexiest Non Binary</legend>
              <p className="sexiestPara para3">
                <input
                  type="radio"
                  name="nonbinary"
                  value="Brother Ken"
                  id="brotherken"
                  selected={sexiestNSelection === "Brother Ken"}
                />
                <Deblur className="deblur" />
                <label htmlFor="brotherken">Brother Ken</label>
                <br />
              </p>
              <p className="sexiestPara para3">
                <input
                  type="radio"
                  name="nonbinary"
                  value="Kid Quick"
                  id="kidquick"
                  selected={sexiestNSelection === "Kid Quick"}
                />
                <Deblur className="deblur" />
                <label htmlFor="kidquick">Kid Quick</label>
                <br />
              </p>
              <p className="sexiestPara para3">
                <input
                  type="radio"
                  name="nonbinary"
                  value="Snow Flake"
                  id="snowflake"
                  selected={sexiestNSelection === "Snow Flake"}
                />
                <Deblur className="deblur" />
                <label htmlFor="snowflake">Snow Flake</label>
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
