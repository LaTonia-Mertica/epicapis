import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Deblur } from "@mui/icons-material";

import "./Sexiest.scss";
import { style } from "../mui.js";
import nonbinary from "./images/nonbinary-representation-gap.png";

const Sexiest = ({ openModal, onClose }) => {
  const [sexiestFSelection, setSexiestFSelection] = useState();
  const [sexiestMSelection, setSexiestMSelection] = useState();
  const [sexiestNSelection, setSexiestNSelection] = useState();

  useEffect(() => {
    if (openModal) {
      const storageString = window.localStorage.getItem("sexiestSelections");

      if (storageString) {
        const selections = JSON.parse(storageString);

        if (selections.sexiestFSelection) {
          setSexiestFSelection(selections.sexiestFSelection);
        }

        if (selections.sexiestMSelection) {
          setSexiestMSelection(selections.sexiestMSelection);
        }

        if (selections.sexiestNSelection) {
          setSexiestNSelection(selections.sexiestNSelection);
        }
      }
    }
  }, [openModal]);

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
      // console.log(sexiestFSelection, sexiestMSelection, sexiestNSelection);
    } else if (!sexiestMSelection && !sexiestNSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestFSelection,
        })
      );
      // console.log(sexiestFSelection);
    } else if (!sexiestFSelection && !sexiestNSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestMSelection,
        })
      );
      // console.log(sexiestMSelection);
    } else if (!sexiestFSelection && !sexiestMSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestNSelection,
        })
      );
      // console.log(sexiestNSelection);
    } else if (!sexiestNSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestFSelection,
          sexiestMSelection,
        })
      );
      // console.log(sexiestFSelection, sexiestMSelection);
    } else if (!sexiestMSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestFSelection,
          sexiestNSelection,
        })
      );
      // console.log(sexiestFSelection, sexiestNSelection);
    } else if (!sexiestFSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestMSelection,
          sexiestNSelection,
        })
      );
      // console.log(sexiestMSelection, sexiestNSelection);
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
                    checked={sexiestFSelection === "Catwoman"}
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
                    checked={sexiestFSelection === "She-Ra"}
                    className="customIcon"
                  />
                  She-Ra
                </label>
              </p>
              <p className="sexiestPara para1">
                <label htmlFor="wonderwoman">
                  {/* {console.log(sexiestFSelection === "Wonder Woman")} */}
                  <Deblur className="deblur" />
                  <input
                    type="radio"
                    name="feminine"
                    value="Wonder Woman"
                    id="wonderwoman"
                    title="image by pinterest.com"
                    checked={sexiestFSelection === "Wonder Woman"}
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
                    checked={sexiestMSelection === "Batman"}
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
                    checked={sexiestMSelection === "Black Panther"}
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
                    checked={sexiestMSelection === "Spider-Man"}
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
                    checked={sexiestNSelection === "Brother Ken"}
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
                    checked={sexiestNSelection === "Kid Quick"}
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
                    checked={sexiestNSelection === "Snow Flake"}
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
