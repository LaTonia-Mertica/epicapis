import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Dangerous.scss";
import { style } from "../mui.js";

const Dangerous = ({ openModal, onClose }) => {
  const [showTextArea, setShowTextArea] = useState(false);
  const [dangerousEntry, setDangerousEntry] = useState();

  const setToggle = () => {
    setShowTextArea(!showTextArea);
  };

  const submit = () => {
    console.log(dangerousEntry);
    if (dangerousEntry) {
      window.localStorage.setItem(
        "dangerousEntry",
        JSON.stringify(dangerousEntry)
      );
    } else {
      window.localStorage.setItem(
        "dangerousEntry",
        "boastful. unwieldy. alienating in what it does, when, and how. misleading. maybe even malicious. slow. dangerous code makes you feel exhausted."
      );
    }
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
                <br />
                <br />
                click <i>submit</i> to keep my definition or toggle the smiley
                face to the un-smiley face to input your own definition.
              </p>

              <label htmlFor="dangerous"></label>
              <input
                type="checkbox"
                name="dangerous"
                value="Definition of Dangerous"
                onClick={setToggle}
              />
              {showTextArea && (
                <form action="/enterplaceinputwilllivehere" method="get">
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
