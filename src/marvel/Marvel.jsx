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
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCreator = async (event) => {
    event.preventDefault();
    setLoading(true);
    fetch(
      `http://gateway.marvel.com/v1/public/creators?ts=${ts}&apikey=${apikey}&hash=${hash}&nameStartsWith=${name}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setName("");
        setCreator({
          name: data.data.results[0].fullName,
          attributionHTML: data.attributionHTML.replace(
            "<a",
            "<a target='_blank'"
          ),
          attributionText: data.attributionText,
          image:
            data.data.results[0].thumbnail.path +
            "." +
            data.data.results[0].thumbnail.extension,
          url: data.data.results[0].urls[0].url,
          comics: data.data.results[0].comics.items[0].name,
          events: data.data.results[0].events.items[0].name,
          series: data.data.results[0].series.items[0].name,
          stories: data.data.results[0].stories.items[0].name,
          total: data.data.total,
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
          <form>
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
            {creator ? (
              <>
                <section>
                  <h1 className="creatorName">{creator.name.toUpperCase()}</h1>

                  <p className="totalResults">
                    total possible creators
                    <br />
                    for this search:&nbsp;
                    {creator.total}
                  </p>

                  <img
                    src={creator.image}
                    alt={name}
                    rel="noreferrer"
                    className="creatorComicCoverImg"
                  />

                  <a
                    href={creator.url}
                    target="_blank"
                    rel="noreferrer"
                    className="linkToCreatorCreations"
                  >
                    creator creations
                  </a>

                  <ul className="comicsUl">
                    <li>{creator.comics}</li>
                  </ul>

                  <ul className="eventsUl">
                    <li>{creator.events}</li>
                  </ul>

                  <ul className="seriesUl">
                    <li>{creator.series}</li>
                  </ul>

                  <p className="storyFromStories">{creator.stories}</p>

                  <p
                    dangerouslySetInnerHTML={{
                      __html: creator.attributionHTML,
                    }}
                    className="marvelApiLinkPara"
                  />
                </section>
              </>
            ) : (
              <></>
            )}

            <img src={skyline} alt="Skyline" className="skyline" />
          </>
        </Box>
      </Modal>
    </main>
  );
};
export default Marvel;
