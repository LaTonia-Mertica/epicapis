import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Beautiful.scss";
import { style } from "../mui.js";

const Beautiful = ({ openModal, onClose }) => {
  const [showTextArea, setShowTextArea] = useState(false);
  const [beautifulEntry, setBeautifulEntry] = useState("");

  const setToggle = () => {
    setShowTextArea(!showTextArea);
  };

  const submit = () => {
    if ((showTextArea && !beautifulEntry) || !showTextArea) {
      // if user toggles and didn't enter anything OR user didn't toggle: use default definition
      window.localStorage.setItem(
        "beautifulEntry",
        JSON.stringify({
          beautifulEntry:
            "bold. consistent. clear in what it does, when, and how. free of code clutter. fun. doesn't shy from stating code simply. beautiful code makes you feel welcome.",
          showTextArea,
        })
      );
    } else if (showTextArea && beautifulEntry) {
      // if user toggles and entered definition: use what user entered
      window.localStorage.setItem(
        "beautifulEntry",
        JSON.stringify({
          beautifulEntry,
          showTextArea: true,
        })
      );
    }
    onClose(true);
  };

  useEffect(() => {
    if (openModal) {
      const storageString = window.localStorage.getItem("beautifulEntry");

      if (storageString) {
        const entries = JSON.parse(storageString);
        if (entries.showTextArea) {
          setShowTextArea(entries.showTextArea);
        }
        if (entries.beautifulEntry) {
          setBeautifulEntry(entries.beautifulEntry);
        }
      }
    }
  }, [openModal]);

  return (
    <main>
      <Modal
        open={openModal === "Beautiful Code"}
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
                checked={showTextArea}
                onClick={setToggle}
              />
              {showTextArea && (
                <form>
                  <label htmlFor="beautifulCode"></label>
                  <textarea
                    type="textbox"
                    placeholder="enter your definition of beautiful code here ..."
                    value={beautifulEntry}
                    onChange={(event) => {
                      setBeautifulEntry(event.target.value);
                    }}
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
