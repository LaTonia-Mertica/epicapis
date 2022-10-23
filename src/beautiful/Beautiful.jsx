import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Beautiful.scss";
import { style } from "../mui.js";

// appropriate
// bold
// clean
// clear
// comfy
// readable
// consistent
// efficient
// elegant
// fun
// functional
// modular
// reusable
// sensible
// simple
// tests easy

const Beautiful = ({ openModal, onClose }) => {
  return (
    <main>
      <Modal
        open={openModal === "Beautiful"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="beautifulCard">
          <>
            <Button onClick={onClose}>&#x274C;</Button>

            <section>
              <p>
                bold. consistent. clear in what it does, when, and how. free of
                code clutter. fun. doesn't shy from stating code simply.
                <br />
                <br />
                beautiful code makes you feel welcome.
              </p>

              <label htmlFor="beautiful"></label>
              <input
                type="checkbox"
                name="beautiful"
                id="beautiful"
                value="beautiful"
              />

              <input type="textbox" />
            </section>
            {/* add placeholder to prompt user to enter their own definition */}
            {/* only reveal textbox if user selects sad face */}
            {/* disable input for textbox if user selects happy face */}

            <Button type="button" className="submitBtn">
              submit
            </Button>
          </>
        </Box>
      </Modal>
    </main>
  );
};
export default Beautiful;
