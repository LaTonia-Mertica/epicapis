import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Grittiest.scss";
import { style } from "../mui.js";

const Grittiest = ({ openModal, onClose }) => {
  const [grittiestArmy, setGrittiestArmy] = useState();
  const [grittiestYear, setGrittiestYear] = useState();

  const submit = () => {
    window.localStorage.setItem(
      "grittiestEntry",
      JSON.stringify({ grittiestYear, grittiestArmy })
    );
    onClose(true);
  };

  useEffect(() => {
    if (openModal) {
      const storage = window.localStorage.getItem("grittiestEntry");

      if (storage) {
        const entries = JSON.parse(storage);

        if (entries.grittiestArmy) {
          setGrittiestArmy(entries.grittiestArmy);
        }
        if (entries.grittiestYear) {
          setGrittiestYear(entries.grittiestYear);
        }
      }
    }
  }, [openModal]);

  return (
    <main>
      <Modal
        open={openModal === "Grittiest Army"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="grittiestCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <form onSubmit={submit} className="grittiestFieldsetDiv">
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
            <button type="submit" className="submitBtn">
              submit
            </button>
          </form>
        </Box>
      </Modal>
    </main>
  );
};
export default Grittiest;
