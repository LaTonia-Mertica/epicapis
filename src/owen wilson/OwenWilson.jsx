import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./OwenWilson.scss";
import { style } from "../mui.js";

const OwenWilson = ({ openModal, onClose }) => {
  const [movie, setMovie] = useState();

  const getWow = async () => {
    const data = await fetch(
      `https://owen-wilson-wow-api.herokuapp.com/wows/random`
    );

    const json = await data.json();
    setMovie(json[0]);
  };

  useEffect(() => {
    getWow();
  }, []);

  return (
    <main>
      <Modal
        open={openModal === "OwenWilson"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="owensCard">
          <Button onClick={onClose}>&#x2573;</Button>
          <button className="changeWowBtn" onClick={getWow}>
            change wow
          </button>
          {movie && (
            <div>
              <video src={movie.video["480p"]} autoPlay controls loop />
              <br />
              <br />
              <span className="contextText">context: </span>
              <span className="wowText">{movie.full_line}</span>
              <br />
              <br />
            </div>
          )}
        </Box>
      </Modal>
    </main>
  );
};
export default OwenWilson;
