import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Agify.scss";
import bluefairygodmother from "./images/blue-fairy-godmother.gif";

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

function Agify({ openModal, onClose }) {
  const self = this;

  const [ageShow, setAgeShow] = useState("");
  const [ageByName, setAgeByName] = useState({
    age: "",
    name: "",
  });

  const getAgeByName = () => {
    axios
      .get(`https://api.agify.io?name`)
      .then((response) => {
        self.setAgeByName({
          age: response.data.age,
          name: response.data.name,
        });
      })
      .catch((error) => console.log(error));
    setAgeShow(true);
  };

  return (
    <main>
      <Modal
        open={openModal === "Agify"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="agifyCard">
          <button onClick={onClose}>&#x274C;</button>
          <div>
            <input
              type="text"
              name="agify"
              id="agify"
              placeholder="enter name"
              autoComplete="off"
              onChange={(event) => {
                setAgeByName(event.target.value.toLowerCase());
              }}
            />
          </div>

          {/* img credit: tenor.com */}
          <div>
            {!ageShow ? (
              <img
                src={bluefairygodmother}
                alt="Blue Fairy Godmother"
                width="13%"
                height="auto"
                className="imgBlueFairyGodmother"
              ></img>
            ) : (
              <h1>{ageByName}</h1>
            )}
          </div>

          <section>
            <h1>{ageByName.name}</h1>
          </section>

          <Button onClick={getAgeByName}>Get Age By Name</Button>
        </Box>
      </Modal>
    </main>
  );
}
export default Agify;
