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
          <Button onClick={onClose}>&#x274C;</Button>
          <>
            <section>
              <label htmlFor="beautiful">
                change to paragraph with definition
              </label>
              <input
                type="checkbox"
                name="beautiful"
                id="beautiful"
                value="beautiful"
              />
            </section>
            {/* add placeholder to prompt user to enter their own definition */}
            {/* only reveal textbox if user selects sad face */}
            {/* disable input for textbox if user selects happy face */}
            <section>
              <input type="textbox" />
            </section>

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
