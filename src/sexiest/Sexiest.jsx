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
    } else if (!sexiestMSelection && !sexiestNSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestFSelection,
        })
      );
    } else if (!sexiestFSelection && !sexiestNSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestMSelection,
        })
      );
    } else if (!sexiestFSelection && !sexiestMSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestNSelection,
        })
      );
    } else if (!sexiestNSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestFSelection,
          sexiestMSelection,
        })
      );
    } else if (!sexiestMSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestFSelection,
          sexiestNSelection,
        })
      );
    } else if (!sexiestFSelection) {
      window.localStorage.setItem(
        "sexiestSelections",
        JSON.stringify({
          sexiestMSelection,
          sexiestNSelection,
        })
      );
    }
    onClose(true);
  };

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

  return (
    <main>
      <Modal
        open={openModal === "Sexiest Alter Ego"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="sexiestCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <form onSubmit={submit} className="fieldsetDiv">
            <fieldset>
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
                    onChange={(event) => {
                      setSexiestFSelection(event.target.value);
                    }}
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
                    onChange={(event) => {
                      setSexiestFSelection(event.target.value);
                    }}
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
                    checked={sexiestFSelection === "Wonder Woman"}
                    onChange={(event) => {
                      setSexiestFSelection(event.target.value);
                    }}
                    className="customIcon"
                  />
                  Wonder Woman
                </label>
              </p>
            </fieldset>

            <fieldset>
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
                    onChange={(event) => {
                      setSexiestMSelection(event.target.value);
                    }}
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
                    onChange={(event) => {
                      setSexiestMSelection(event.target.value);
                    }}
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
                    onChange={(event) => {
                      setSexiestMSelection(event.target.value);
                    }}
                    className="customIcon"
                  />
                  Spider-Man
                </label>
                <br />
              </p>
              {/* button for page submission */}
              <button type="submit" className="submitBtn">
                submit
              </button>
            </fieldset>

            <fieldset>
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
                    onChange={(event) => {
                      setSexiestNSelection(event.target.value);
                    }}
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
                    onChange={(event) => {
                      setSexiestNSelection(event.target.value);
                    }}
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
                    onChange={(event) => {
                      setSexiestNSelection(event.target.value);
                    }}
                    className="customIcon"
                  />
                  Snow Flake
                </label>
                <br />
              </p>
            </fieldset>
          </form>
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
