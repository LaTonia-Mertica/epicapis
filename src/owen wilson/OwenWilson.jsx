import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./OwenWilson.scss";
import { style } from "../mui.js";

const OwenWilson = ({ openModal, onClose }) => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);

  const getWow = async () => {
    setLoading(true);
    const data = await fetch(
      `https://owen-wilson-wow-api.herokuapp.com/wows/random`
    ).catch((error) => console.log("Oh Wow, Owen's Been Heroku'ed (Too)!"));
    setLoading(false);

    const json = await data.json();
    setMovie(json[0]);
    setLoading(false);
  };

  useEffect(() => {
    getWow();
  }, []);

  useEffect(() => {
    if (!openModal) {
      getWow();
    }
  }, [openModal]);

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
            {loading ? <>loading...</> : <>change wow</>}
          </button>
          {!movie ? (
            <>
              <img
                src="https://media.giphy.com/media/hiEs8sF8KoYnu/giphy.gif"
                alt="Owen Wows"
              />

              <p className="errorMsg">Oh Wow, Owen's Been Heroku'ed (Too)!</p>
            </>
          ) : (
            ""
          )}
          {movie && (
            <div>
              <video src={movie.video["480p"]} autoPlay controls loop />
              <br />
              <br />
              <span className="contextText">context:&nbsp;</span>
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
