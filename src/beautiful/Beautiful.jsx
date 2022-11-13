import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Beautiful.scss";
import { style } from "../mui.js";

const Beautiful = ({ openModal, onClose }) => {
  const [showTextArea, setShowTextArea] = useState(false);

  const setToggle = () => {
    setShowTextArea(!showTextArea);
  };

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
                <br />
                <br />
                click <i>submit</i> to keep my definition or toggle the smiley
                face to the un-smiley face to input your own definition.
              </p>

              <label htmlFor="beautiful"></label>
              <input
                type="checkbox"
                name="beautiful"
                value="beautiful"
                // id="theCheckBx"
                onClick={setToggle}
              />
              {showTextArea && (
                <form action="/enterplaceinputwilllivehere" method="get">
                  <label htmlFor="beautifulCode"></label>
                  <textarea
                    type="textbox"
                    // id="theTxtArea"
                    placeholder="enter your definition of beautiful code here ..."
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
export default Beautiful;
