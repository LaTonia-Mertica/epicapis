import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Badassest.scss";

// mui
const style = {
  position: "absolute",
  outline: 0,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "87%",
  bgcolor: "background.transparent",
  border: ".05rem solid #fff",
  boxShadow: 23,
  p: 1.15,

  color: "#fff",
  fontFamily: "Arial, Helvetica, sans-serif",
};

function Badassest({ openModal, onClose }) {
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
                  <span className="baddies">resident evil</span>
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
                  <span className="baddies">the walking dead</span>
                </label>
                <br />

                <input type="radio" name="badassest" id="ellen" value="ellen" />
                <label htmlFor="ellen">
                  Ellen <br />
                  <span className="baddies">predator</span>
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
                  <span className="baddies">guardians of the galaxy</span>
                </label>
                <br />

                <input type="radio" name="badassest" id="sarah" value="sarah" />
                <label htmlFor="sarah">
                  Sarah
                  <br />
                  <span className="baddies">terminator</span>
                </label>
                <br />
              </p>
            </fieldset>
            <button type="button" className="submitBtn">
              submit
            </button>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default Badassest;
