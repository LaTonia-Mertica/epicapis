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
import kapow from "./images/kapow.png";
import pow from "./images/pow.png";

const Marvel = ({ openModal, onClose }) => {
  const ts = require("./ts");
  const hash = md5(ts + privateApikey + apikey);
  const [name, setName] = useState("");
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
        if (data.data.total === 0) {
          setError("No Creators Found");
        } else {
          setError(null);
          setCreator({
            name: data.data.results[0]?.fullName,
            attributionHTML: data?.attributionHTML.replace(
              "<a",
              "<a target='_blank'"
            ),
            attributionText: data?.attributionText,
            image:
              data.data.results[0]?.thumbnail?.path +
              "." +
              data.data.results[0]?.thumbnail?.extension,
            url: data.data.results[0]?.urls[0]?.url,
            comics: data.data.results[0]?.comics?.items[0]?.name,
            events: data.data.results[0]?.events?.items[0]?.name,
            series: data.data.results[0]?.series?.items[0]?.name,
            stories: data.data.results[0]?.stories?.items[0]?.name,
            total: data.data.total,
          });
        }
        console.log(data);
        setLoading(false);
      })
      .catch((error) => console.log("ACCESS ERROR!"));
  };

  useEffect(() => {
    if (!openModal) {
      setName("");
      setError(null);
      setCreator(null);
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
            {error && <p>{error}</p>}
            {!error && creator ? (
              <>
                <section>
                  {creator.name && (
                    <h1 className="creatorName">
                      {creator.name.toUpperCase()}
                    </h1>
                  )}

                  {creator.total && (
                    <p className="totalResults">
                      total possible creators for this search:&nbsp;
                      {creator.total}
                    </p>
                  )}

                  {/* {creator.image ? <img/> : null} */}
                  {creator.image && (
                    <img
                      src={creator.image}
                      alt={name}
                      rel="noreferrer"
                      className="creatorComicCoverOrPortraitImg"
                    />
                  )}

                  <img src={kapow} alt="Color Block" className="kapow" />
                  <img src={pow} alt="Color Block" className="pow" />
                  <img src={skyline} alt="Skyline" className="skyline" />

                  {creator.url && (
                    <a
                      href={creator.url}
                      target="_blank"
                      rel="noreferrer"
                      className="linkToCreatorCreations"
                    >
                      creator creations
                    </a>
                  )}

                  {creator.comics && (
                    <ul className="comicsUl">
                      <li>{creator.comics}</li>
                    </ul>
                  )}

                  {creator.events && (
                    <ul className="eventsUl">
                      <li>{creator.events}</li>
                    </ul>
                  )}

                  {creator.series && (
                    <ul className="seriesUl">
                      <li>{creator.series}</li>
                    </ul>
                  )}

                  {creator.stories && (
                    <p className="storyFromStories">{creator.stories}</p>
                  )}

                  {/* input not sanitized because it is coming from a trusted source and is only running on the frontend */}
                  {creator.attributionHTML && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: creator.attributionHTML,
                      }}
                      className="marvelApiLinkPara"
                    />
                  )}
                </section>
              </>
            ) : (
              <></>
            )}
          </>
        </Box>
      </Modal>
    </main>
  );
};
export default Marvel;
