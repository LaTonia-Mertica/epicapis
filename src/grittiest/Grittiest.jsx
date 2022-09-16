import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Grittiest.scss";

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

function Grittiest({ openModal, onClose }) {
  return (
    <main>
      <Modal
        open={openModal === "Grittiest"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="grittiestCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div className="grittiestFieldsetDiv">
            <fieldset className="grittiestFieldset">
              <p className="grittiestPara">
                <label htmlFor="decade">grittiest decade :&nbsp;&nbsp;</label>
                <input
                  type="number"
                  name="decade"
                  id="decade"
                  min="1770"
                  max="2030"
                  step="10"
                  className="decade"
                  placeholder="select"
                />
                <input
                  type="text"
                  name="grittiestArmy"
                  id="grittiestArmy"
                  placeholder="enter name of army"
                  className="grittiestArmy"
                />
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
}
export default Grittiest;
