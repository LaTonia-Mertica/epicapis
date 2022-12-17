import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Best.scss";
import { style } from "../mui.js";

const Best = ({ openModal, onClose }) => {
  const [bestSelection, setBestSelection] = useState();

  useEffect(() => {
    if (openModal) {
      const storageString = window.localStorage.getItem("bestSelection");

      if (storageString) {
        setBestSelection(JSON.parse(storageString));
      }
    }
  }, [openModal]);

  const submit = () => {
    if (bestSelection) {
      window.localStorage.setItem(
        "bestSelection",
        JSON.stringify(bestSelection)
      );
    }
  };

  return (
    <main>
      <Modal
        open={openModal === "Best"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bestCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <fieldset
              onChange={(event) => {
                setBestSelection(event.target.value);
              }}
            >
              <p className="bestPara">
                <input
                  type="radio"
                  name="best"
                  id="young"
                  value="young-ish (just starting out)"
                  checked={bestSelection === "young-ish (just starting out)"}
                />
                <label htmlFor="young">
                  young<span className="parens">(</span>er
                  <span className="parens">)</span>
                  <span className="dashIshText">-ish</span>
                  <br />
                  <span className="besties">just starting out</span>
                </label>
                <br />

                <input
                  type="radio"
                  name="best"
                  id="middling"
                  value="middling (too far in but too far from out)"
                  checked={
                    bestSelection ===
                    "middling (too far in but too far from out)"
                  }
                />
                <label htmlFor="middling">
                  middling
                  <br />
                  <span className="besties">
                    too far in but too far from out
                  </span>
                </label>
                <br />

                <input
                  type="radio"
                  name="best"
                  id="old"
                  value="old-ish (getting on in years)"
                  checked={bestSelection === "old-ish (getting on in years)"}
                />
                <label htmlFor="old">
                  old<span className="parens">(</span>er
                  <span className="parens">)</span>
                  <span className="dashIshText">-ish</span>
                  <br />
                  <span className="besties">getting on in years</span>
                </label>
                <br />
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
export default Best;
