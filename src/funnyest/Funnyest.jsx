import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Funnyest.scss";

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

function Funnyest({ openModal, onClose }) {
  return (
    <main>
      <Modal
        open={openModal === "Funnyest"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="funnyestCard">
          <button onClick={onClose}>&#x274C;</button>
          <div>
            <fieldset>
              <p>
                <select name="funnyest" id="funnyest">
                  <option value="whoopigoldberg">Whoopi Goldberg</option>
                  <option value="davidmann">David Mann</option>
                  <option value="lawandapage">LaWanda Page</option>
                  <option value="wandasykes">Wanda Sykes</option>
                  <option value="roberttownsend">Robert Townsend</option>
                </select>
              </p>
            </fieldset>
            <button type="button">submit</button>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default Funnyest;
