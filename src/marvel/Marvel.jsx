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

  useEffect(() => {
    if (!openModal) {
      setName("");
    }
  }, [openModal]);

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
                <h1 className="creatorName">{name.toUpperCase()}</h1>
             

                <a href={creator.url} target="_blank" rel="noreferrer" className="linkToCreatorCreations">creator creations
                   </a>
              
                 {/* <img src={creator.image} alt="" rel="noreferrer" /> */}

                 <ul className="comicsUl">
                  <li>{creator.comics}</li>
                  <li>{creator.comics}</li>
                  <li>{creator.comics}</li>
                  </ul>

                   <ul className="seriesUl">
                   <li>{creator.series}</li>
                   <li>{creator.series}</li>
                   <li>{creator.series}</li>
                   <li>{creator.series}</li>
                   <li>{creator.series}</li>
                   </ul>

                  <p className="storyFromStories">{creator.stories}</p>

                  <p className="marvelApiLinkPara">
                 {creator.attribution}
              </p>
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

