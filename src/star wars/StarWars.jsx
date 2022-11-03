import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Select from "react-select";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./StarWars.scss";
import { style } from "../mui.js";

import stormtrooper from "./images/stormtrooper.gif";

const StarWars = ({ openModal, onClose }) => {
  // const [starshipName, setStarshipName] = useState("");
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [allStarships, setAllStarships] = useState([]);

  const searchStarship = (starshipURL) => {
    // event.preventDefault();
    setLoading(true);
    console.log(allStarships, starshipURL);
    const matchingShip = allStarships.find((ship) => ship.url === starshipURL);
    console.log(matchingShip);
    if (matchingShip) {
      setStarship({
        name: matchingShip.name,
        model: matchingShip.model,
        class: matchingShip.starship_class,
        manufacturer: matchingShip.manufacturer,
        cost: matchingShip.cost_in_credits,
        length: matchingShip.length,
        crew: matchingShip.crew,
        consumables: matchingShip.consumables,
        capacityPassengers: matchingShip.passengers,
        capacityCargo: matchingShip.cargo_capacity,
        speed: matchingShip.max_atmosphering_speed,
        hyperdrive: matchingShip.hyperdrive_rating,
        megalights: matchingShip.MGLT,
      });
      setTimeout(() => {
        setStarship(null);
      }, 15000);
    } else {
      setError("Starship Does Not Exist!");
      setStarship(null);
      setLoading(false);
    }

    setError(null);
    setLoading(false);
    setLoading(false);
    // axios
    //   .get(starshipURL)
    //   .then((response) => {
    //     console.log(response);
    //     if (response?.data?.results?.name) {
    //       console.log(response.data);
    //       setStarship({
    //         name: response.data.results[0].name,
    //         model: response.data.results[0].model,
    //         class: response.data.results[0].starship_class,
    //         manufacturer: response.data.results[0].manufacturer,
    //         cost: response.data.results[0].cost_in_credits,
    //         length: response.data.results[0].length,
    //         crew: response.data.results[0].crew,
    //         consumables: response.data.results[0].consumables,
    //         capacityPassengers: response.data.results[0].passengers,
    //         capacityCargo: response.data.results[0].cargo_capacity,
    //         speed: response.data.results[0].max_atmosphering_speed,
    //         hyperdrive: response.data.results[0].hyperdrive_rating,
    //         megalights: response.data.results[0].MGLT,
    //       });
    //     } else {
    //       setError("Starship Does Not Exist!");
    //       setStarship(null);
    //       setLoading(false);
    //     }

    //     setError(null);
    //     setLoading(false);

    //     setTimeout(() => {
    //       setStarship(null);
    //     }, 16000);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     setError("Starship Does Not Exist!");
    //     setLoading(false);
    //   });
  };

  let starshipAggregator = [];

  const getNextPage = (nextURL) => {
    console.log(nextURL);
    axios.get(nextURL).then((response) => {
      const starshipData = response.data.results;

      starshipAggregator = [...starshipAggregator, ...starshipData];

      if (response.data.next) {
        //recursive call if there is another page of data
        getNextPage(response.data.next);
      } else {
        setAllStarships(starshipAggregator);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    if (openModal) {
      setLoading(true);
      if (allStarships.length === 0) {
        getNextPage(`https://swapi.dev/api/starships/?limit=1000`);
      }
    }
  }, [openModal]);

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
            <form>
              {/* {!starship && (
                <> */}
              {/* <input
                    type="text"
                    name="starshipname"
                    id="starshipname"
                    placeholder="enter starship name"
                    autoComplete="off"
                    onChange={(event) => {
                      setStarshipName(event.target.value.toLowerCase());
                    }}
                  /> */}

              <Select
                options={allStarships.map((starship) => ({
                  value: starship.url,
                  label: starship.name,
                }))}
                styles={{
                  option: () => ({
                    color: "#545454",
                    fontSize: "1.25rem",
                    fontFamily: "monospace",
                    textAlign: "left",
                    paddingLeft: "1rem",
                  }),
                }}
                onChange={(newValue) => {
                  searchStarship(newValue.value);
                }}
                openMenuOnFocus={false}
                openMenuOnClick={false}
                placeholder="start typing starship name ..."
                className="autocompleteSelect"
              />

              <Button
                disabled={true}
                // type="submit"
                // onClick={searchStarship}
                className="searchBtn"
              >
                {
                  loading ? <>loading...</> : ""
                  // (
                  //   // <>Search Starships</>
                  //   ""
                  // )
                }
              </Button>
              {/* </>
              )} */}
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
                      {/* <h1>{starshipName}</h1> */}
                      <h1>{starship.name}</h1>

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
