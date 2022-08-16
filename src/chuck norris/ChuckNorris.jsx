import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./ChuckNorris.scss";

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
  fontSize: "1.5rem",
  textTransform: "lowercase",
  fontFamily: "Arial, Helvetica, sans-serif",
};

function ChuckNorris({ openModal, onClose }) {
  const [joke, setJoke] = useState({
    joke: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const output = await axios.get(`https://api.chucknorris.io/jokes/random`);

    setJoke({
      ...joke,
      joke: output.data.value,
    });
  };

  return (
    <main>
      <Modal
        open={openModal === "ChuckNorris"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="chucksCard">
          <button onClick={onClose}>&#x274C;</button>
          <div>
            <p className="jokeText">{joke.joke}</p>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default ChuckNorris;
