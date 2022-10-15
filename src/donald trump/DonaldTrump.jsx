import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./DonaldTrump.scss";
import { style } from "../mui.js";

const DonaldTrump = ({ openModal, onClose }) => {
  const [quote, setQuote] = useState({
    quote: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    setLoading(true);
    const data = await axios.get(`https://api.tronalddump.io/random/quote`);
    setQuote({
      ...quote,
      quote: data.data.value,
    });
    setLoading(false);
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
          <Button onClick={onClose} className="donaldCloseBtn">
            &#x2612;
          </Button>
          <button className="changeQuoteBtn" onClick={getData}>
            {loading ? <>loading...</> : <>change quote</>}
          </button>
          <div>
            <p className="quoteText">' {quote.quote}'</p>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default DonaldTrump;
