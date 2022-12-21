import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Dangerous.scss";
import { style } from "../mui.js";

const Dangerous = ({ openModal, onClose }) => {
  const [showTextArea, setShowTextArea] = useState(false);
  const [dangerousEntry, setDangerousEntry] = useState("");

  const setToggle = () => {
    setShowTextArea(!showTextArea);
  };

  const submit = () => {
    if (!showTextArea || (showTextArea && !dangerousEntry)) {
      // if user didn't toggle OR if user toggles and didn't enter anything: use default definition
      window.localStorage.setItem(
        "dangerousEntry",
        JSON.stringify({
          dangerousEntry:
            "boastful. unwieldy. alienating in what it does, when, and how. misleading. maybe even malicious. slow. dangerous code makes you feel exhausted.",
          showTextArea,
        })
      );
    } else if (showTextArea && dangerousEntry) {
      // if user toggles and entered definition: use what user entered
      window.localStorage.setItem(
        "dangerousEntry",
        JSON.stringify({ dangerousEntry, showTextArea: true })
      );
    }
    onClose();
  };

  useEffect(() => {
    if (openModal) {
      const storageString = window.localStorage.getItem("dangerousEntry");

      if (storageString) {
        const entries = JSON.parse(storageString);
        if (entries.showTextArea) {
          setShowTextArea(entries.showTextArea);
        }
        if (entries.dangerousEntry) {
          setDangerousEntry(entries.dangerousEntry);
        }
      }
    }
  }, [openModal]);

  return (
    <main>
      <Modal
        open={openModal === "Dangerous Code"}
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
                <br />
                <br />
                click <i>submit</i> to keep my definition or toggle the smiley
                face to the un-smiley face to input your own definition.
              </p>

              <label htmlFor="dangerous"></label>
              <input
                type="checkbox"
                name="dangerous"
                checked={showTextArea}
                onClick={setToggle}
              />
              {showTextArea && (
                <form>
                  <label htmlFor="dangerousCode"></label>
                  <textarea
                    type="textbox"
                    placeholder="enter your definition of dangerous code here ..."
                    value={dangerousEntry}
                    onChange={(event) => {
                      setDangerousEntry(event.target.value);
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
export default Dangerous;
