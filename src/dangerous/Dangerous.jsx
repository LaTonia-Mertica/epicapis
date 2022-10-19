import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Dangerous.scss";
import { style } from "../mui.js";

// alienating
// boastful
// boring
// chaotic
// cluttered
// disfunctional
// limiting
// malicious
// misleading
// too nested
// slow
// uninspiring
// unrelatable
// unwieldy

const Dangerous = ({ openModal, onClose }) => {
  return (
    <main>
      <Modal
        open={openModal === "Dangerous"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="dangerousCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <>
            <section>
              <label htmlFor="dangerous">
                change to paragraph with definition
              </label>
              <input
                type="checkbox"
                name="dangerous"
                id="dangerous"
                value="dangerous"
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
export default Dangerous;
