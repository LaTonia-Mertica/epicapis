import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./RonSwanson.scss";
import { style } from "../mui.js";

function RonSwanson({ openModal, onClose }) {
  const [quote, setQuote] = useState();

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
            <p>'{quote}'</p>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default RonSwanson;
