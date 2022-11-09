import React, { useEffect, useState } from "react";
import md5 from "js-md5";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import apikey from "./apikey";
import privateApikey from "./privateApikey";

import "./Marvel.scss";
import { style } from "../mui.js";
import skyline from "./images/skyline.png";

const Marvel = ({ openModal, onClose }) => {
  const ts = require("./ts");
  const hash = md5(ts + privateApikey + apikey);
  const [name, setName] = useState("");
  const [creator, setCreator] = useState();
  const [loading, setLoading] = useState(false);

  const getCreator = async (event) => {
    event.preventDefault();
    setLoading(true);
    fetch(
      `http://gateway.marvel.com/v1/public/creators?ts=${ts}&apikey=${apikey}&hash=${hash}&nameStartsWith=${name}&limit=1`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCreator({
          name: data.name,
          attribution: data.attributionText,
          link: data.attributionHTML,
          copyright: data.copyright,
          image: data.data.results[0].resourceURI,
          url: data.data.results[0].urls[0].url,
          comics: data.data.results[0].comics.items[0].name,
          series: data.data.results[0].series.items[0].name,
          stories: data.data.results[0].stories.items[0].name,
        });

        console.log(data);
        setLoading(false);
      })
      .catch((error) => console.log("ACCESS ERROR!"));
  };

  // TODO: map 1) comics, 2) series, 3) stories  to populate array to display content in paragragh; handle if creator has no image

  // SET RESET
  // useEffect(() => {
  //   if (!openModal) {
  //     setCreator();
  //   }
  // }, [openModal]);

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
          <form onSubmit={getCreator}>
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
            <Button type="submit" onClick={getCreator} className="searchBtn">
              {loading ? <>loading...</> : <>Get Creator</>}
            </Button>
          </form>

          <>
            {!getCreator ? (
              <></>
            ) : (
              <>
                <section>
                {/* <a href={creator.url} target="_blank">
                  <h1 className="creatorName">{name.toUpperCase()}</h1>
                  <img src={creator.image} alt="" />
                
                </a>
                  <p>{creator.comics}</p>
                  <p>{creator.series}</p>
                  <p>{creator.stories}</p>
                  <p className="marvelApiLinkPara">
                <a
                  className="marvelApiLinkAnchor"
                  href={creator.link}
                  target="_blank"
                  rel="noreferrer"
                > 
                 {creator.attribution}&nbsp;{creator.copyright}
                </a>
              </p> */}
                </section>
              </>
            )}

            <img src={skyline} alt="Skyline" className="skyline" />
          </>
        </Box>
      </Modal>
    </main>
  );
};
export default Marvel;
