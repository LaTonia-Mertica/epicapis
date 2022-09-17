import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./RonSwanson.scss";

// mui
const style = {
  position: "absolute",
  outline: 0,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "87%",
  bgcolor: "background.transparent",
  border: ".05rem solid #fff",
  boxShadow: 23,
  p: 1.15,

  color: "#fff",
  fontFamily: "Arial, Helvetica, sans-serif",
};

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
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <p>{quote}</p>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default RonSwanson;
