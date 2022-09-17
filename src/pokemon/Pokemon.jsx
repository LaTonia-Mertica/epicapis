import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Pokemon.scss";
import pikachuhi from "./images/pikachuhi.gif";

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
};

function Pokemon({ openModal, onClose }) {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonShow, setPokemonShow] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    type: "",
    image: "",
  });
  const [error, setError] = useState();

  const searchPokemon = (event) => {
    event.preventDefault();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/` + pokemonName)
      .then((response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          type: response.data.types[0].type.name,
          image: response.data.sprites.front_default,
        });
        setError(null);
        setPokemonShow(true);
      })
      .catch((error) => {
        console.error(error);
        setError("Pokemon doesn't exist");
      });
  };

  return (
    <main>
      <Modal
        open={openModal === "Pokemon"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="pokemonsCard">
          <button onClick={onClose}>&#x274C;</button>
          <form onSubmit={searchPokemon}>
            <input
              type="text"
              name="pokemonname"
              id="pokemonname"
              placeholder="enter pokemon name"
              autoComplete="off"
              onChange={(event) => {
                setPokemonName(event.target.value.toLowerCase());
              }}
            />

            <Button type="submit" onClick={searchPokemon} className="searchBtn">
              Search Pokemon
            </Button>
          </form>
          {error ? (
            <h1>{error}</h1>
          ) : (
            <>
              <div>
                {!pokemonShow ? (
                  <img
                    src={pikachuhi}
                    alt="Pikachu Hi"
                    width="20%"
                    height="auto"
                    className="gif"
                  ></img>
                ) : (
                  <h1>{pokemonName}</h1>
                )}
              </div>

              {/* gif credit: tenor.com */}

              <img src={pokemon.image} alt="" className="pokemonImg" />
              <section>
                <h2>{pokemon.species}</h2>
                <h2>{pokemon.type}</h2>
              </section>
            </>
          )}
        </Box>
      </Modal>
    </main>
  );
}
export default Pokemon;
