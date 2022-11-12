import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./RonSwanson.scss";
import { style } from "../mui.js";

const RonSwanson = ({ openModal, onClose }) => {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(false);
  const [manlyMode, setManlyMode] = useState(false);

  const getQuote = async () => {
    setLoading(true);
    const data = await fetch(
      `https://ron-swanson-quotes.herokuapp.com/v2/quotes`
    );
    const json = await data.json();
    setQuote(json[0]);
    setLoading(false);
  };

  useEffect(() => {
    getQuote();
    const checkModeStatus = JSON.parse(localStorage.getItem("manly-mode"));
    if (checkModeStatus === null) {
      localStorage.setItem("manly-mode", "false");
    } else {
      setManlyMode(checkModeStatus);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("manly-mode", `${manlyMode}`);
  }, [manlyMode]);

  useEffect(() => {
    if (!openModal) {
      getQuote();
    }
  }, [openModal]);

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
            {loading ? <>loading...</> : <>change quote</>}
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
