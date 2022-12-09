import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Rampantest.scss";
import { style } from "../mui.js";

const Rampantest = ({ openModal, onClose }) => {
  const [rampantestStache, setRampantestStache] = useState();
  const [rampantestYear, setRampantestYear] = useState();

  const submit = () => {
    if (!rampantestStache) {
      window.localStorage.setItem(
        "rampantestEntry",
        JSON.stringify(rampantestYear)
      );
      console.log(rampantestYear);
    } else if (!rampantestYear) {
      window.localStorage.setItem(
        "rampantestEntry",
        JSON.stringify(rampantestStache)
      );
      console.log(rampantestStache);
    } else {
      window.localStorage.setItem(
        "rampantestEntry",
        JSON.stringify(`${rampantestYear}: ${rampantestStache}`)
      );
      console.log(`${rampantestYear}: ${rampantestStache}`);
    }
  };

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
                  value={rampantestYear}
                  onChange={(event) => {
                    setRampantestYear(event.target.value);
                  }}
                />
                <input
                  type="text"
                  name="rampantestEntry"
                  id="rampantestEntry"
                  placeholder="if not hercule poirot, then who .. ."
                  autoComplete="off"
                  className="rampantestEntry"
                  value={rampantestStache}
                  onChange={(event) => {
                    setRampantestStache(event.target.value);
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
export default Rampantest;
