import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./OwenWilson.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
          <button onClick={onClose}>close me</button>
          {movie && (
            <div>
              {movie.movie}
              <video controls src={movie.video["480p"]} />
            </div>
          )}
        </Box>
      </Modal>
    </main>
  );
}

export default OwenWilson;
