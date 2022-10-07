import React, { useState } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Pokemon.scss";
import { style } from "../mui.js";

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

/* gif credit: tenor.com */

let randomGif = Math.floor(Math.random() * (pokemonGifs.length + 1));
randomGif = pokemonGifs[randomGif];

function Pokemon({ openModal, onClose }) {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonShow, setPokemonShow] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    type: "",
    image: "",
    image_back: "",
    back_shiny: "",
    front_shiny: "",
    abilities: "",
    moves: "",
    weight: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const searchPokemon = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/` + pokemonName)
      .then((response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          types: response.data.types[0].type.name,
          image: response.data.sprites.front_default,
          image_back: response.data.sprites.back_default,
          back_shiny: response.data.sprites.back_shiny,
          front_shiny: response.data.sprites.front_shiny,
          abilities: [
            response.data.abilities[0].ability.name,
            response.data.abilities[1].ability.name,
          ],
          moves: [
            response.data.moves[0].move.name,
            response.data.moves[1].move.name,
            response.data.moves[2].move.name,
          ],
          weight: response.data.weight,
        });
        setError(null);
        setPokemonShow(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Try Again!");
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
              autoComplete="on"
              onChange={(event) => {
                setPokemonName(event.target.value.toLowerCase());
              }}
            />

            <Button type="submit" onClick={searchPokemon} className="searchBtn">
              {loading ? <>loading...</> : <> Search Pokemon</>}
            </Button>
          </form>

          {error ? (
            <h1>{error}</h1>
          ) : (
            <>
              {!pokemonShow ? (
                randomGif
              ) : (
                <>
                  <h1>{pokemonName}</h1>

                  <span className="specDetailsSpan">
                    <section>
                      <img src={pokemon.image} alt="" className="pokemonImg" />
                    </section>

                    {/* pokemon card image courtesy etsy.com */}

                    <section>
                      <h2>
                        <span className="specDetails">species:&nbsp;</span>
                        {pokemon.species}
                      </h2>
                      <h2>
                        <span className="specDetails">type:&nbsp;</span>
                        {pokemon.types}
                      </h2>
                      <h2>
                        <span className="specDetails">ability:&nbsp;</span>
                        {pokemon.abilities[0]}
                      </h2>
                      <h2>
                        <span className="specDetails">ability:&nbsp;</span>
                        {pokemon.abilities[1]}
                      </h2>
                      <h2>
                        <span className="specDetails">move:&nbsp;</span>
                        {pokemon.moves[0]}
                      </h2>
                      <h2>
                        <span className="specDetails">move:&nbsp;</span>
                        {pokemon.moves[1]}
                      </h2>
                      <h2>
                        <span className="specDetails">move:&nbsp;</span>
                        {pokemon.moves[2]}
                      </h2>
                      <h2>
                        <span className="specDetails">weight:&nbsp;</span>
                        {pokemon.weight}
                      </h2>
                    </section>

                    <section className="nonMainImagesSection">
                      <img
                        src={pokemon.front_shiny}
                        alt=""
                        className="nonMainImages"
                      />
                      <img
                        src={pokemon.image_back}
                        alt=""
                        className="nonMainImages"
                      />
                      <img
                        src={pokemon.back_shiny}
                        alt=""
                        className="nonMainImages"
                      />
                    </section>
                  </span>
                </>
              )}
            </>
          )}
        </Box>
      </Modal>
    </main>
  );
}
export default Pokemon;
