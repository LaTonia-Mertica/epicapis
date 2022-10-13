import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./RonSwanson.scss";
import { style } from "../mui.js";

const RonSwanson = ({ openModal, onClose }) => {
  const [quote, setQuote] = useState();
  const [manlyMode, setManlyMode] = useState(false);

  const getQuote = async () => {
    const data = await fetch(
      `https://ron-swanson-quotes.herokuapp.com/v2/quotes`
    );
    const json = await data.json();
    setQuote(json[0]);
  };
  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    const checkModeStatus = JSON.parse(localStorage.getItem("manly-mode"));
    if (checkModeStatus === null) {
      localStorage.setItem("manly-mode", JSON.stringify(false));
    } else {
      setManlyMode(checkModeStatus);
    }
  }, []);

  useEffect(() => {
    if (manlyMode) {
      localStorage.setItem("manly-mode", JSON.stringify(true));
    } else {
      localStorage.setItem("manly-mode", JSON.stringify(false));
    }
  }, [manlyMode]);

  return (
    <main>
      <Modal
        className={manlyMode ? "manly" : ""}
        open={openModal === "RonSwanson"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="ronsCard">
          <Button onClick={onClose}>&#x1F167;</Button>
          <button className="changeQuoteBtn" onClick={getQuote}>
            change quote
          </button>

          <div>
            <p>
              '{quote}'
              <br />
              <button
                className="manly manlyModeBtn lineUpEffect"
                onClick={() => {
                  setManlyMode(!manlyMode);
                }}
              >
                MANLY MODE&nbsp;&nbsp;|&nbsp;&nbsp;2 THOUGHTS
              </button>
            </p>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default RonSwanson;
