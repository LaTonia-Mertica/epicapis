import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./ChuckNorris.scss";
import { style } from "../mui.js";

function ChuckNorris({ openModal, onClose }) {
  const [joke, setJoke] = useState({
    joke: "",
  });

  useEffect(() => {
    getData();
    // disable rule
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    const data = await axios.get(`https://api.chucknorris.io/jokes/random`);

    setJoke({
      ...joke,
      joke: data.data.value,
    });
  };

  // **note:** reasons this api uses axios:
  // axios and fetch are used in the epic apis project for practice with both libraries
  // asycn/await and .then are both used in the epic apis project for familiarity with both types of asynchronous code syntax
  // fetch and async/await are the more modern and preferred methods

  return (
    <main>
      <Modal
        open={openModal === "ChuckNorris"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="chucksCard">
          <Button onClick={onClose}>&#x2620;</Button>
          <div>
            <p className="jokeText">{joke.joke}</p>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default ChuckNorris;
