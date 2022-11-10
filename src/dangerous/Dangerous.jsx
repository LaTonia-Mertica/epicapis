import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Dangerous.scss";
import { style } from "../mui.js";

const Dangerous = ({ openModal, onClose }) => {
  const [showTextArea, setShowTextArea] = useState(false);

  const setToggle = () => {
    setShowTextArea(!showTextArea);
  };

  return (
    <main>
      <Modal
        open={openModal === "Dangerous"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="dangerousCard">
          <>
            <Button onClick={onClose}>&#x274C;</Button>

            <section>
              <p>
                boastful. unwieldy. alienating in what it does, when, and how.
                misleading. maybe even malicious. slow.
                <br />
                <br />
                dangerous code makes you feel exhausted.
              </p>

              <label htmlFor="dangerous"></label>
              <input
                type="checkbox"
                name="dangerous"
                value="dangerous"
                // id="theCheckBx"
                onClick={setToggle}
              />
              {showTextArea && (
                <form action="/enterplaceinputwilllivehere" method="get">
                  <label htmlFor="dangerousCode"></label>
                  <textarea
                    type="textbox"
                    id="theTxtArea"
                    placeholder="enter your definition of dangerous code here ..."
                  ></textarea>
                </form>
              )}
            </section>

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
export default Dangerous;
