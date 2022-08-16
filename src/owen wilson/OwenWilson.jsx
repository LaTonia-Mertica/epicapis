import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./OwenWilson.scss";

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

function OwenWilson({ openModal, onClose }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    (async () => {
      const data = await fetch(
        `https://owen-wilson-wow-api.herokuapp.com/wows/random`
      );
      const json = await data.json();
      setMovie(json[0]);
    })();
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
          <button onClick={onClose}>&#x274C;</button>
          {movie && (
            <div>
              <video autoPlay controls loop src={movie.video["480p"]} />
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
}

export default OwenWilson;
