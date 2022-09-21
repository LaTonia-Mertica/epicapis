import React, { useEffect, useState } from "react";
import md5 from "js-md5";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Marvel.scss";

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

  maxHeight: "90vh",
  overflow: "scroll",
};

function Marvel({ openModal, onClose }) {
  const [marvel, setMarvel] = useState();
  const ts = require("./ts");
  const apiKey = require("./apiKey");
  const privateApiKey = require("./privateApiKey");
  const hash = md5(ts + apiKey + privateApiKey);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        `http://gateway.marvel.com/v1/public/creators?ts=${ts}&apiKey=${apiKey}&hash=${hash}`,
        {
          Method: "GET",
          Params: {
            apikey: "apiKey",
            privateApiKey: "privateApiKey",
            ts: "ts",
            hash: "hash",
          },
          Headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
        }
      );
      console.log(data);
      const json = await data.json();
      setMarvel(json[0]);
    })();
  }, [ts, apiKey, privateApiKey, hash]);

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
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <p>{marvel}</p>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default Marvel;
