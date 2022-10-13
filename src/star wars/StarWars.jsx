import React, { useState } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./StarWars.scss";
import { style } from "../mui.js";

import stormtrooper from "./images/stormtrooper.gif";

const StarWars = ({ openModal, onClose }) => {
  const [starshipName, setStarshipName] = useState("");
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const searchStarship = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .get(`https://swapi.dev/api/starships/?search=${starshipName}`)
      .then((response) => {
        setStarship({
          name: starshipName,
          model: response.data.results[0].model,
          class: response.data.results[0].starship_class,
          manufacturer: response.data.results[0].manufacturer,
          cost: response.data.results[0].cost_in_credits,
          length: response.data.results[0].length,
          crew: response.data.results[0].crew,
          consumables: response.data.results[0].consumables,
          capacityPassengers: response.data.results[0].passengers,
          capacityCargo: response.data.results[0].cargo_capacity,
          speed: response.data.results[0].max_atmosphering_speed,
          hyperdrive: response.data.results[0].hyperdrive_rating,
          megalights: response.data.results[0].MGLT,
        });
        setError(null);
        setLoading(false);

        setTimeout(() => {
          setStarship(null);
        }, 15000);
      })
      .catch((error) => {
        console.error(error);
        setError("No Such Starship!");
      });
  };

  // **note:** reasons this api uses axios:
  // axios and fetch are used in the epic apis project for practice with both libraries
  // asycn/await and .then are both used in the epic apis project for familiarity with both types of asynchronous code syntax
  // fetch and async/await are the more modern and preferred methods

  return (
    <main>
      <Modal
        open={openModal === "StarWars"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* img credit: stormtrooper / tenor.com */}

        <Box sx={style} className="starWarsCard">
          <div>
            <Button onClick={onClose}>&#x24B3;</Button>
            <form onSubmit={searchStarship}>
              {!starship && (
                <>
                  <input
                    type="text"
                    name="starshipname"
                    id="starshipname"
                    placeholder="enter starship name"
                    autoComplete="off"
                    onChange={(event) => {
                      setStarshipName(event.target.value.toLowerCase());
                    }}
                  />

                  <Button
                    type="submit"
                    onClick={searchStarship}
                    className="searchBtn"
                  >
                    {loading ? <>loading...</> : <>Search Starships</>}
                  </Button>
                </>
              )}
              {!starship && (
                <img
                  src={stormtrooper}
                  alt="Stormtrooper"
                  width="15%"
                  height="auto"
                  className="stormtrooperImg"
                ></img>
              )}
            </form>
          </div>

          {starship && (
            <div className="fade specsDiv">
              <section className="star-wars">
                <div className="crawl">
                  {error ? (
                    <h1>{error}</h1>
                  ) : (
                    <>
                      <h1>{starshipName}</h1>

                      <h5>
                        <span className="specificationsText">model:&nbsp;</span>
                        {starship.model}
                      </h5>
                      <h5>
                        <span className="specificationsText">class:&nbsp;</span>
                        {starship.class}
                      </h5>
                      <h5>
                        <span className="specificationsText">
                          manufacturer:&nbsp;
                        </span>
                        {starship.manufacturer}
                      </h5>

                      <h5>
                        <span className="specificationsText">
                          cost in credits:&nbsp;
                        </span>
                        {starship.cost
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </h5>
                      <h5>
                        <span className="specificationsText">
                          length in meters:&nbsp;
                        </span>
                        {starship.length
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </h5>
                      <h5>
                        <span className="specificationsText">crew:&nbsp;</span>
                        {starship.crew}
                      </h5>
                      <h5>
                        <span className="specificationsText">
                          consumables:&nbsp;
                        </span>
                        {starship.consumables}
                      </h5>
                      <h5>
                        <span className="specificationsText">
                          passenger capacity:&nbsp;
                        </span>
                        {starship.capacityPassengers}
                      </h5>
                      <h5>
                        <span className="specificationsText">
                          cargo capacity:&nbsp;
                        </span>
                        {starship.capacityCargo
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </h5>
                      <h5>
                        <span className="specificationsText">
                          max atmosphering speed in km/h:&nbsp;
                        </span>
                        {starship.speed
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </h5>
                      <h5>
                        <span className="specificationsText">
                          hyperdrive in faster-than-light speeds:&nbsp;
                        </span>
                        {starship.hyperdrive
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </h5>
                      <h5>
                        <span className="specificationsText">
                          megalights/h:&nbsp;
                        </span>
                        {starship.megalights
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </h5>
                    </>
                  )}
                </div>
              </section>
            </div>
          )}
        </Box>
      </Modal>
    </main>
  );
};
export default StarWars;
