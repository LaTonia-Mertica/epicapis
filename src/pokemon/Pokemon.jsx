import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Pokemon.scss";
import axios from "axios";

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

function Pokemon({ openModal, onClose }) {
  const [poke, setPoke] = useState({
    poke: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/?random/`);

    setPoke({
      ...poke,
      poke: data.data.name,
    });
  };

  return (
    <main>
      <Modal
        open={openModal === "Pokemon"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="pokemonsCard">
          <button onClick={onClose}>&#x274C;</button>

          {poke && <div>{poke.name}</div>}
        </Box>
      </Modal>
    </main>
  );
}
export default Pokemon;
