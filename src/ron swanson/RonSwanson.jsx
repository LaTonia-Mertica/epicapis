import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./RonSwanson.scss";
import { style } from "../mui.js";

function RonSwanson({ openModal, onClose }) {
  const [manlyMode, setManlyMode] = React.useState(false);
  const [quote, setQuote] = useState();

  React.useEffect(() => {
    const json = localStorage.getItem("site-manly-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setManlyMode(true);
    } else {
      setManlyMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (manlyMode) {
      document.body.classList.add("manly");
    } else {
      document.body.classList.remove("manly");
    }
    const json = JSON.stringify(manlyMode);
    localStorage.setItem("site-manly-mode", json);
  }, [manlyMode]);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        `https://ron-swanson-quotes.herokuapp.com/v2/quotes`
      );
      const json = await data.json();
      setQuote(json[0]);
    })();
  }, []);

  return (
    <main>
      <Modal
        open={openModal === "RonSwanson"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="ronsCard">
          <Button onClick={onClose}>&#x1F167;</Button>

          <div>
            <p>
              '{quote}'
              <br />
              <button
                onClick={() => setManlyMode(!manlyMode)}
                className="manlyModeBtn lineUpEffect"
              >
                MANLY MODE&nbsp;&nbsp;|&nbsp;&nbsp;2 VIEWS
              </button>
            </p>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default RonSwanson;
