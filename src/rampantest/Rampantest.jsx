import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Rampantest.scss";
import { style } from "../mui.js";

const Rampantest = ({ openModal, onClose }) => {
  return (
    <main>
      <Modal
        open={openModal === "Rampantest"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rampantestCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <fieldset>
              <p className="rampantestPara">
                <label htmlFor="decade">rampantest decade :&nbsp;&nbsp;</label>
                <input
                  type="number"
                  name="decade"
                  id="decade"
                  min="1900"
                  max="2020"
                  step="10"
                  className="decade"
                  placeholder="select"
                />
                <input
                  type="text"
                  name="rampantestEntry"
                  id="rampantestEntry"
                  placeholder="if not hercule poirot, then who .. ."
                  autoComplete="off"
                  className="rampantestEntry"
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
};
export default Rampantest;
