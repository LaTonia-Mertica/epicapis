import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Rampantest.scss";
import { style } from "../mui.js";

const Rampantest = ({ openModal, onClose }) => {
  const [rampantestStache, setRampantestStache] = useState();
  const [rampantestYear, setRampantestYear] = useState();
  // TODO: determine how to package year and text input as an object
  // TODO: use 1) rampantestYear, setRampantestYear and 2) rampantest, setRampantest?
  // EXAMPLE: {rampantestYear: rampantest}
  const submit = () => {
    console.log(rampantestStache, rampantestYear);

    if (!rampantestStache) {
      window.localStorage.setItem(
        "rampantestEntry",
        JSON.stringify(rampantestYear)
      );
    } else if (!rampantestYear) {
      window.localStorage.setItem(
        "rampantestEntry",
        JSON.stringify(rampantestStache)
      );
    } else {
      window.localStorage.setItem(
        "rampantestEntry",
        JSON.stringify(`${rampantestYear}: ${rampantestStache}`)
      );
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
            <fieldset
              onChange={(event) => {
                setRampantestStache(event.target.value);
                setRampantestYear(event.target.value);
              }}
            >
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
                  // TODO: determine if selected needed/accurate
                  selected={rampantestYear === { rampantestYear }}
                />
                <input
                  type="text"
                  name="rampantestEntry"
                  id="rampantestEntry"
                  placeholder="if not hercule poirot, then who .. ."
                  autoComplete="off"
                  className="rampantestEntry"
                  // TODO: determine if need state for text input
                  // TODO: determine how to get whole name (not single letters) to store
                  value={rampantestStache}
                  // TODO: determine if selected needed/accurate
                  selected={rampantestStache === { rampantestStache }}
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
