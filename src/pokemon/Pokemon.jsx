import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Pokemon.scss";

import chansey from "./images/chansey.gif";
import charizardxflying from "./images/charizardxflying.gif";
import charmeleon from "./images/charmeleon.gif";
import cinderace from "./images/cinderace.gif";
import djvulpix from "./images/djvulpix.gif";
import eevee from "./images/eevee.gif";
import froakie from "./images/froakie.gif";
import furret from "./images/furret.gif";
import garchomp from "./images/garchomp.gif";
import lucario from "./images/lucario.gif";
import mewtwo from "./images/mewtwo.gif";
import nintendo from "./images/nintendo.gif";
import pikachuhi from "./images/pikachuhi.gif";
import pikachulove from "./images/pikachulove.gif";
import pikachumusic from "./images/pikachumusic.gif";
import squirtle from "./images/squirtle.gif";
import sylveon from "./images/sylveon.gif";
import togedemaru from "./images/togedemaru.gif";
import venomoth from "./images/venomoth.gif";
import zoroa from "./images/zoroa.gif";

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

function Pokemon({ openModal, onClose }) {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonShow, setPokemonShow] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    type: "",
    image: "",
    image_back: "",
  });
  const [error, setError] = useState();

  const pokemonGifs = [
    <img src={chansey} alt="Pokemon" />,
    <img src={charizardxflying} alt="Pokemon" />,
    <img src={charmeleon} alt="Pokemon" />,
    <img src={cinderace} alt="Pokemon" />,
    <img src={djvulpix} alt="Pokemon" />,
    <img src={eevee} alt="Pokemon" />,
    <img src={froakie} alt="Pokemon" />,
    <img src={furret} alt="Pokemon" />,
    <img src={garchomp} alt="Pokemon" />,
    <img src={lucario} alt="Pokemon" />,
    <img src={mewtwo} alt="Pokemon" />,
    <img src={nintendo} alt="Pokemon" />,
    <img src={pikachuhi} alt="Pokemon" />,
    <img src={pikachulove} alt="Pokemon" />,
    <img src={pikachumusic} alt="Pokemon" />,
    <img src={squirtle} alt="Pokemon" />,
    <img src={sylveon} alt="Pokemon" />,
    <img src={togedemaru} alt="Pokemon" />,
    <img src={venomoth} alt="Pokemon" />,
    <img src={zoroa} alt="Pokemon" />,
  ];

  let randomGif = Math.floor(Math.random() * (pokemonGifs.length + 1));
  randomGif = pokemonGifs[randomGif];

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
          image_back: response.data.sprites.back_default,
        });
        setError(null);
        setPokemonShow(true);
      })
      .catch((error) => {
        console.error(error);
        setError("Pokemon Doesn't Exist");
      });
  };

  // **note:** reasons this api uses axios:
  // axios and fetch are used in the epic apis project for practice with both libraries
  // asycn/await and .then are both used in the epic apis project for familiarity with both types of asynchronous code syntax
  // fetch is the more modern and preferred method

  return (
    <main>
      <Modal
        open={openModal === "Pokemon"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="pokemonsCard">
          <button onClick={onClose}>&#x24B3;</button>
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
              <div>{!pokemonShow ? randomGif : <h1>{pokemonName}</h1>}</div>

              {/* gif credit: tenor.com */}

              <img src={pokemon.image} alt="" className="pokemonImg" />
              <img src={pokemon.image_back} alt="" className="pokemonImg" />

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
