import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Badassest.scss";

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
          <button onClick={onClose}>&#x274C;</button>
          <div>
            <fieldset className="badassestFieldset">
              <p className="badassestPara">
                <input type="radio" name="badassest" id="alice" value="alice" />
                <label htmlFor="alice">Alice</label>
                <br />
                <input type="radio" name="badassest" id="marv" value="marv" />
                <label htmlFor="marv">Marv</label>
                <br />
                <input
                  type="radio"
                  name="badassest"
                  id="johnrambo"
                  value="johnrambo"
                />
                <label htmlFor="johnrambo">John Rambo</label>
                <br />
                <input
                  type="radio"
                  name="badassest"
                  id="ellenripley"
                  value="ellenripley"
                />
                <label htmlFor="ellenripley">Ellen Ripley</label>
                <br />
                <input
                  type="radio"
                  name="badassest"
                  id="thebride"
                  value="thebride"
                />
                <label htmlFor="thebride">The Bride</label>
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
