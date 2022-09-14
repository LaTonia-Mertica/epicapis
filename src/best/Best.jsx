import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Best.scss";

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

function Best({ openModal, onClose }) {
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
            <fieldset>
              <p className="bestPara">
                <input type="radio" name="young" id="young" value="young" />
                <label htmlFor="young">
                  young(er)'ish
                  <br />
                  <span className="besties">just starting out</span>
                </label>
                <br />

                <input
                  type="radio"
                  name="middling"
                  id="middling"
                  value="middling"
                />
                <label htmlFor="middling">
                  middling
                  <br />
                  <span className="besties">
                    too far in but too far from out
                  </span>
                </label>
                <br />

                <input type="radio" name="old" id="old" value="old" />
                <label htmlFor="old">
                  old(er)'ish
                  <br />
                  <span className="besties">getting on in years</span>
                </label>
                <br />
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
export default Best;
