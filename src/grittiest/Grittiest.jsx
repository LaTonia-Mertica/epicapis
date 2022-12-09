import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Grittiest.scss";
import { style } from "../mui.js";

const Grittiest = ({ openModal, onClose }) => {
  const [grittiestArmy, setGrittiestArmy] = useState();
  const [grittiestYear, setGrittiestYear] = useState();

  const submit = () => {
    if (!grittiestArmy) {
      window.localStorage.setItem(
        "grittiestEntry",
        JSON.stringify(grittiestYear)
      );
      console.log(grittiestYear);
    } else if (!grittiestYear) {
      window.localStorage.setItem(
        "grittiestEntry",
        JSON.stringify(grittiestArmy)
      );
      console.log(grittiestArmy);
    } else {
      window.localStorage.setItem(
        "grittiestEntry",
        JSON.stringify(`${grittiestYear}: ${grittiestArmy}`)
      );
      console.log(`${grittiestYear}: ${grittiestArmy}`);
    }
  };

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
                  value={grittiestYear}
                  onChange={(event) => {
                    setGrittiestYear(event.target.value);
                  }}
                />
                <input
                  type="text"
                  name="grittiestArmy"
                  id="grittiestArmy"
                  placeholder="enter name of army"
                  autoComplete="off"
                  className="grittiestArmy"
                  value={grittiestArmy}
                  onChange={(event) => {
                    setGrittiestArmy(event.target.value);
                  }}
                />
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
export default Grittiest;
