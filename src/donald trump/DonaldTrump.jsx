import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./DonaldTrump.scss";

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

  maxHeight: "90vh",
  overflow: "scroll",
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

  // **note:** reasons this api uses axios:
  // axios and fetch are used in the epic apis project for practice with both libraries
  // asycn/await and .then are both used in the epic apis project for familiarity with both types of asynchronous code syntax
  // fetch and async/await are the more modern and preferred methods

  return (
    <main>
      <Modal
        open={openModal === "DonaldTrump"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="donaldsCard">
          <Button onClick={onClose}>&#x2327;</Button>
          <div>
            <p className="quoteText">' {quote.quote}'</p>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default DonaldTrump;
