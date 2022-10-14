import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Sexiest.scss";
import { style } from "../mui.js";

const Sexiest = ({ openModal, onClose }) => {
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
            <fieldset>
              <legend className="feminineLegend">Sexiest Feminine</legend>
              <p className="sexiestPara para1">
                <input
                  type="radio"
                  name="categoriesFeminine"
                  id="catwoman"
                  value="catwoman"
                />
                <label htmlFor="catwoman">Catwoman</label>
              </p>
              <p className="sexiestPara para1">
                <input
                  type="radio"
                  name="categoriesFeminine"
                  id="shera"
                  value="shera"
                />
                <label htmlFor="shera">She-Ra</label>
              </p>
              <p className="sexiestPara para1">
                <input
                  type="radio"
                  name="categoriesFeminine"
                  id="wonderwoman"
                  value="wonderwoman"
                />
                <label htmlFor="wonderwoman">Wonder Woman</label>
              </p>
            </fieldset>

            <fieldset>
              <legend className="masculineLegend">Sexiest Masculine</legend>
              <p className="sexiestPara para2">
                <input
                  type="radio"
                  name="categoriesMasculine"
                  id="batman"
                  value="batman"
                />
                <label htmlFor="batman">Batman</label>
                <br />
              </p>
              <p className="sexiestPara para2">
                <input
                  type="radio"
                  name="categoriesMasculine"
                  id="spiderman"
                  value="spiderman"
                />
                <label htmlFor="spiderman">Spider-Man</label>
                <br />
              </p>
              <p className="sexiestPara para2">
                <input
                  type="radio"
                  name="categoriesMasculine"
                  id="superman"
                  value="superman"
                />
                <label htmlFor="superman">Superman</label>
                <br />
              </p>
            </fieldset>

            <fieldset>
              <legend className="nonbinaryLegend">Sexiest Non Binary</legend>
              <p className="sexiestPara para3">
                <input
                  type="radio"
                  name="categoriesNonBinary"
                  id="snowflake"
                  value="snowflake"
                />
                <label htmlFor="snowflake">Snow Flake</label>
                <br />
              </p>
              <p className="sexiestPara para3">
                <input
                  type="radio"
                  name="categoriesNonBinary"
                  id="brotherken"
                  value="brotherken"
                />
                <label htmlFor="brotherken">Brother Ken</label>
                <br />
              </p>
              <p className="sexiestPara para3">
                <input
                  type="radio"
                  name="categoriesNonBinary"
                  id="kidquick"
                  value="kidquick"
                />
                <label htmlFor="kidquick">Kid Quick</label>
                <br />
              </p>
            </fieldset>
          </div>
          <button type="submit" className="submitBtn">
            submit
          </button>
        </Box>
      </Modal>
    </main>
  );
};
export default Sexiest;
