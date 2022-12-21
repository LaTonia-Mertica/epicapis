import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Badassest.scss";
import { style } from "../mui.js";

const Badassest = ({ openModal, onClose }) => {
  const [badassestSelection, setBadassestSelection] = useState();

  const submit = () => {
    if (badassestSelection) {
      window.localStorage.setItem(
        "badassestSelection",
        JSON.stringify(badassestSelection)
      );
    }
    onClose();
  };

  useEffect(() => {
    if (openModal) {
      const storageString = window.localStorage.getItem("badassestSelection");

      if (storageString) {
        const selection = JSON.parse(storageString);

        if (selection) {
          setBadassestSelection(selection);
        }
      }
    }
  }, [openModal]);

  return (
    <main>
      <Modal
        open={openModal === "Badassest On Tv"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="badassestCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div className="radioFieldsetDiv">
            <fieldset
              className="badassestFieldset"
              onChange={(event) => {
                setBadassestSelection(event.target.value);
              }}
            >
              <p className="badassestPara">
                <input
                  type="radio"
                  name="badassest"
                  id="alice"
                  value="Alice (resident evil)"
                  checked={badassestSelection === "Alice (resident evil)"}
                />
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
                  value="Michonne (the walking dead)"
                  checked={badassestSelection === "Michonne (the walking dead)"}
                />
                <label htmlFor="michonne">
                  Michonne
                  <br />
                  <span className="characters">the walking dead</span>
                </label>
                <br />

                <input
                  type="radio"
                  name="badassest"
                  id="ellen"
                  value="Ellen (predator)"
                  checked={badassestSelection === "Ellen (predator)"}
                />
                <label htmlFor="ellen">
                  Ellen <br />
                  <span className="characters">predator</span>
                </label>
                <br />

                <input
                  type="radio"
                  name="badassest"
                  id="gamora"
                  value="Gamora (guardians of the galaxy)"
                  checked={
                    badassestSelection === "Gamora (guardians of the galaxy)"
                  }
                />
                <label htmlFor="gamora">
                  Gamora <br />
                  <span className="characters">guardians of the galaxy</span>
                </label>
                <br />

                <input
                  type="radio"
                  name="badassest"
                  id="sarah"
                  value="Sarah (terminator)"
                  checked={badassestSelection === "Sarah (terminator)"}
                />
                <label htmlFor="sarah">
                  Sarah
                  <br />
                  <span className="characters">terminator</span>
                </label>
                <br />
              </p>
            </fieldset>
            <button type="submit" className="submitBtn" onClick={submit}>
              submit
            </button>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default Badassest;
