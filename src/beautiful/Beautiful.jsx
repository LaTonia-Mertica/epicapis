import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Beautiful.scss";
import { style } from "../mui.js";

const Beautiful = ({ openModal, onClose }) => {
  const [showTextArea, setShowTextArea] = useState(false);
  const [beautifulEntry, setBeautifulEntry] = useState();

  const setToggle = () => {
    setShowTextArea(!showTextArea);
  };

  const submit = () => {
    console.log(beautifulEntry);
    if (beautifulEntry) {
      window.localStorage.setItem(
        "beautifulEntry",
        JSON.stringify(beautifulEntry)
      );
    } else {
      console.log(
        "bold. consistent. clear in what it does, when, and how. free of code clutter. fun. doesn't shy from stating code simply. beautiful code makes you feel welcome."
      );
    }
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

            <section
              onChange={(event) => {
                setBeautifulEntry(event.target.value);
              }}
            >
              {/* TODO: determine how to add preset definition if user does not add their own 
                  TODO: add value={default} or other to preset definition AND use with ternary to set if add default or user-inputted definition?
                  */}
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
                value="Definition of Beautiful"
                // TODO: must replace value to reflect if default or user-inputted AND to capture user input
                // value="beautiful"
                onClick={setToggle}
              />
              {showTextArea && (
                <form action="/enterplaceinputwilllivehere" method="get">
                  <label htmlFor="beautifulCode"></label>
                  <textarea
                    type="textbox"
                    placeholder="enter your definition of beautiful code here ..."
                    // TODO: determine if value usable or how to refactor for functionality
                    // TODO: determine where word 'on' coming from as first word in textarea when click into it
                    value={beautifulEntry}
                  ></textarea>
                </form>
              )}
            </section>

            <Button type="button" className="submitBtn" onClick={submit}>
              submit
            </Button>
          </>
        </Box>
      </Modal>
    </main>
  );
};
export default Beautiful;
