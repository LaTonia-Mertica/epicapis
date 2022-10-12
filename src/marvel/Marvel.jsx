import React, { useState } from "react";
import md5 from "js-md5";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Marvel.scss";
import { style } from "../mui.js";
import skyline from "./images/skyline.png";

const Marvel = ({ openModal, onClose }) => {
  const ts = require("./ts");
  const apikey = require("./apikey");
  const privateapikey = require("./privateApikey");
  const hash = md5(ts + privateapikey + apikey);

  const [name, setName] = useState("");
  const [creators, setCreators] = useState();
  const [loading, setLoading] = useState(false);

  const getCreators = async (event) => {
    event.preventDefault();
    setLoading(true);
    fetch(
      `http://gateway.marvel.com/v1/public/creators?ts=${ts}&apikey=${apikey}&hash=${hash}&nameStartsWith=${name}&limit=3&orderBy=-lastName`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCreators({
          name: data.name,
        });
        console.log(data);
        setLoading(false);
      })
      .catch((error) => console.log("ACCESS ERROR!"));
  };

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
          <form onSubmit={getCreators}>
            <input
              type="text"
              name="marvel"
              id="marvel"
              placeholder="enter creator name"
              autoComplete="off"
              value={name}
              onChange={(event) => {
                setName(event.target.value.toLowerCase());
              }}
            />
            <Button type="submit" onClick={getCreators} className="searchBtn">
              {loading ? <>loading...</> : <>Get Creator</>}
            </Button>
          </form>

          <>
            {!getCreators ? (
              <></>
            ) : (
              <>
                <section>
                  <h1>{name.toUpperCase()}</h1>
                </section>
              </>
            )}

            <section>
              <p className="marvelApiLinkPara">
                <a
                  className="marvelApiLinkAnchor"
                  href="http://marvel.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Data provided by Marvel. © 2014 Marvel
                </a>
              </p>
            </section>

            <img src={skyline} alt="Skyline" className="skyline" />
          </>
        </Box>
      </Modal>
    </main>
  );
};
export default Marvel;
