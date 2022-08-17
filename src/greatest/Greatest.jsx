import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Greatest.scss";

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

function Greatest({ openModal, onClose }) {
  return (
    <main>
      <Modal
        open={openModal === "Greatest"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="greatestCard">
          <button onClick={onClose}>&#x274C;</button>
          <div>
            <fieldset className="greatestFieldset">
              <p className="greatestPara">
                <input
                  type="checkbox"
                  name="greatest"
                  id="aliceinwonderland"
                  value="aliceinwonderland"
                />
                <label htmlFor="aliceinwonderland">Alice in Wonderland</label>
                <br />
                <input
                  type="checkbox"
                  name="greatest"
                  id="jasonandtheargonauts"
                  value="jasonandtheargonauts"
                />
                <label htmlFor="jasonandtheargonauts">
                  Jason & The Argonauts
                </label>
                <br />
                <input
                  type="checkbox"
                  name="greatest"
                  id="panslabyrinth"
                  value="panslabyrinth"
                />
                <label htmlFor="panslabyrinth">Pan's Labyrinth</label>
                <br />
                <input
                  type="checkbox"
                  name="greatest"
                  id="theneverendingstory"
                  value="theneverendingstory"
                />
                <label htmlFor="theneverendingstory">
                  The NeverEnding Story
                </label>
                <br />
                <input
                  type="checkbox"
                  name="greatest"
                  id="theprincessbride"
                  value="theprincessbride"
                />
                <label htmlFor="theprincessbride">The Princess Bride</label>
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
export default Greatest;
