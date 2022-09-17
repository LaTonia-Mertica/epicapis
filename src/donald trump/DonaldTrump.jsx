import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./DonaldTrump.scss";
import axios from "axios";

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

function DonaldTrump({ openModal, onClose }) {
  const [quote, setQuote] = useState({
    quote: "",
  });

  useEffect(() => {
    getData();
    // disable rule
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    const data = await axios.get(`https://api.tronalddump.io/random/quote`);

    setQuote({
      ...quote,
      quote: data.data.value,
    });
  };

  return (
    <main>
      <Modal
        open={openModal === "DonaldTrump"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="donaldsCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <p className="quoteText">' {quote.quote}'</p>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default DonaldTrump;
