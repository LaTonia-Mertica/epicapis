import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Badassest.scss";
import { style } from "../mui.js";

const Badassest = ({ openModal, onClose }) => {
  return (
    <main>
      <Modal
        open={openModal === "Badassest"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="badassestCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div className="radioFieldsetDiv">
            <fieldset className="badassestFieldset">
              <p className="badassestPara">
                <input type="radio" name="badassest" id="alice" value="alice" />
                <label htmlFor="alice">
                  Alice
                  <br />
                  <span className="characters">resident evil</span>
                </label>
                <br />

                <input
                  type="radio"
                  name="badassest"
                  id="michonne"
                  value="michonne"
                />
                <label htmlFor="michonne">
                  Michonne
                  <br />
                  <span className="characters">the walking dead</span>
                </label>
                <br />

                <input type="radio" name="badassest" id="ellen" value="ellen" />
                <label htmlFor="ellen">
                  Ellen <br />
                  <span className="characters">predator</span>
                </label>
                <br />

                <input
                  type="radio"
                  name="badassest"
                  id="gamora"
                  value="gamora"
                />
                <label htmlFor="gamora">
                  Gamora <br />
                  <span className="characters">guardians of the galaxy</span>
                </label>
                <br />

                <input type="radio" name="badassest" id="sarah" value="sarah" />
                <label htmlFor="sarah">
                  Sarah
                  <br />
                  <span className="characters">terminator</span>
                </label>
                <br />
              </p>
            </fieldset>
            <button type="submit" className="submitBtn">
              submit
            </button>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default Badassest;
