import React, { useState } from "react";
import md5 from "js-md5";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Marvel.scss";
import { style } from "../mui.js";

function Marvel({ openModal, onClose }) {
  const ts = require("./ts");
  const apiKey = require("./apiKey");
  const privateApiKey = require("./privateApiKey");
  const hash = md5(ts + apiKey + privateApiKey);

  // /name=${name}?ts=${ts}&apiKey=${apiKey}&hash=${hash}

  const [name, setName] = useState("");
  const [creatorByName, setCreatorByName] = useState({
    name: "",
  });

  const getCreatorByName = async (event) => {
    event.preventDefault();

    const response = fetch(
      `http://gateway.*marvel.com/v1/public?ts=${ts}&apiKey=${apiKey}&hash=${hash}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log("ACCESS ERROR!"));

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const data = response.json();
    setCreatorByName({
      name: data.name,
    });

    console.log(data);
  };

  // "Data provided by Marvel. © 2014 Marvel"

  return (
    <main>
      <Modal
        open={openModal === "Marvel"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="marvelCard">
          <button onClick={onClose}>&#x24E7;</button>
          <form onSubmit={getCreatorByName}>
            <input
              type="text"
              name="marvel"
              id="marvel"
              placeholder="enter name"
              autoComplete="off"
              value={name}
              onChange={(event) => {
                setName(event.target.value.toLowerCase());
              }}
            />
            <Button
              type="submit"
              onClick={getCreatorByName}
              className="searchBtn"
            >
              Get Creator by Name
            </Button>
          </form>

          <div>
            <p>{creatorByName.name}</p>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default Marvel;
