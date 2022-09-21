import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./StarWars.scss";
import stormtrooper from "./images/stormtrooper.gif";

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

function StarWars({ openModal, onClose }) {
  const [starshipName, setStarshipName] = useState("");
  const [starship, setStarship] = useState({
    name: "",
    model: "",
    class: "",
    manufacturer: "",
    created: "",
    cost: "",
    length: "",
    pilots: "",
    crew: "",
    consumables: "",
    capacityPassengers: "",
    capacityCargo: "",
    speed: "",
    hyperdrive: "",
    megalights: "",
    films: [],
  });
  const [error, setError] = useState();

  const invalidInput =
    "Apologies, no starship exists by that name. Please try again.";

  const searchStarship = (event) => {
    event.preventDefault();
    axios
      .get(`https://swapi.dev/api/starships/?search=${starshipName}`)
      .then((response) => {
        setStarship({
          name: starshipName,
          model: response.data.results[0].model,
          class: response.data.results[0].starship_class,
          manufacturer: response.data.results[0].manufacturer,
          created: response.data.results[0].created,
          cost: response.data.results[0].cost_in_credits,
          length: response.data.results[0].length,
          pilots: response.data.results[0].pilots,
          crew: response.data.results[0].crew,
          consumables: response.data.results[0].consumables,
          capacityPassengers: response.data.results[0].passengers,
          capacityCargo: response.data.results[0].cargo_capacity,
          speed: response.data.results[0].max_atmosphering_speed,
          hyperdrive: response.data.results[0].hyperdrive_rating,
          megalights: response.data.results[0].MGLT,
          films: [
            response.data.results[0].films[0].title,
            response.data.results[0].films[0].opening_crawl,
            response.data.results[0].films[0].director,
            response.data.results[0].films[0].producer,
            response.data.results[0].films[0].release_date,
          ],
        });
        setError(null);
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
        <Box sx={style} className="starWarsCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <form onSubmit={searchStarship}>
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
              Search Starships
            </Button>
          </form>
          {/* img credit: stormtrooper / tenor.com */}
          <div>
            {error ? (
              <h1>{error}</h1>
            ) : (
              <>
                <h1>{starshipName}</h1>

                <img
                  src={stormtrooper}
                  alt="Stormtrooper"
                  width="5%"
                  height="auto"
                  className="stormtrooperImg"
                ></img>
              </>
            )}
          </div>

          <section>
            {!!setStarship ? (
              <div>
                <h3>model: {starship.model}</h3>
                <h3 className="classH3">class: {starship.class}</h3>
                <h3>manufacturer: {starship.manufacturer}</h3>

                <h5>
                  <span className="specificationsText">cost in credits: </span>
                  {starship.cost}
                </h5>
                <h5>
                  <span className="specificationsText">length: </span>
                  {starship.length}
                </h5>
                <h5>
                  <span className="specificationsText">pilots: </span>
                  {starship.pilots}
                </h5>
                <h5>
                  <span className="specificationsText">crew: </span>
                  {starship.crew}
                </h5>
                <h5>
                  <span className="specificationsText">consumables: </span>
                  {starship.consumables}
                </h5>
                <h5>
                  <span className="specificationsText">
                    passenger capacity:{" "}
                  </span>
                  {starship.capacityPassengers}
                </h5>
                <h5>
                  <span className="specificationsText">cargo capacity: </span>
                  {starship.capacityCargo}
                </h5>
                <h5>
                  <span className="specificationsText">
                    max atmosphering speed:{" "}
                  </span>
                  {starship.speed}
                </h5>
                <h5>
                  <span className="specificationsText">hyperdrive: </span>
                  {starship.hyperdrive}
                </h5>
                <h5>
                  <span className="specificationsText">megalights: </span>
                  {starship.megalights}
                </h5>
                <h5>
                  <span className="specificationsText">created: </span>
                  {starship.created}
                </h5>

                <h5>
                  <span className="specificationsText">films: </span>
                  {starship.films}
                </h5>
              </div>
            ) : (
              invalidInput
            )}
          </section>
        </Box>
      </Modal>
    </main>
  );
}
export default StarWars;
