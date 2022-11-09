import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Select from "react-select";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Pokemon.scss";
import { style } from "../mui.js";
import pokemonGifs from "./pokemonGifs";
import pokemonworldmap from "./images/pokemonworldmap.png";

const Pokemon = ({ openModal, onClose }) => {
  // const [pokemonName, setPokemonName] = useState("");
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
  const [pokemonImage, setPokemonImage] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [allPokemon, setAllPokemon] = useState([]);

  const searchPokemon = (pokemonName) => {
    // setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/` + pokemonName)
      .then((response) => {
        if (response?.data?.species?.name) {
          // console.log(response.data);
          setPokemon({
            name: pokemonName,
            species: response.data.species.name,
            types: response.data.types[0].type.name,
            image: response.data.sprites.front_default,
            image_back: response.data.sprites.back_default,
            back_shiny: response.data.sprites.back_shiny,
            front_shiny: response.data.sprites.front_shiny,
            abilities:
              response.data?.abilities.length > 1
                ? [
                    response.data.abilities[0].ability.name,
                    response.data.abilities[1].ability.name,
                  ]
                : [response.data.abilities[0].ability.name],
            moves: [
              response.data.moves[0].move.name,
              response.data.moves[1].move.name,
              response.data.moves[2].move.name,
            ],
            weight: response.data.weight,
          });
          const matchGifs = pokemonGifs.filter((gif) =>
            gif.includes(pokemonName.toLowerCase())
          );

          if (matchGifs.length > 0) {
            let randomGifMatch = Math.floor(Math.random() * matchGifs.length);

            setPokemonImage(
              <img
                src={matchGifs[randomGifMatch]}
                alt="Pokemon"
                className="gifMatchGif"
              />
            );

            setError(null);
            setPokemonShow(true);
          } else {
            setPokemonImage(null);
            setPokemonShow(true);
          }
        } else {
          //api returned data but name was not set
          setError("Try Again!");
          setPokemonShow(false);
          // setLoading(false);
        }
        // setLoading(false);
      })
      .catch((error) => {
        //api threw error, likely 404 because pokemon does not exist
        console.error(error);
        setError("Try Again!");
        // setLoading(false);
      });
  };

  // **note:** reasons this api uses axios:
  // axios and fetch are used in the epic apis project for practice with both libraries
  // asycn/await and .then are both used in the epic apis project for familiarity with both types of asynchronous code syntax
  // fetch is the more modern and preferred method

  const getGifMatch = () => {
    let randomGifMatch = Math.floor(Math.random() * pokemonGifs.length);
    let gifMatch = pokemonGifs[randomGifMatch];
    return <img src={gifMatch} alt="Pokemon" className="gifMatchGif" />;
  };

  useEffect(() => {
    if (openModal) {
      setPokemonImage(getGifMatch());
      setPokemonShow(false);

      // TODO 10/25/22 MZM: This is for our autocomplete code, but we need to
      //refactor to use the npm react-select package
      if (allPokemon.length === 0) {
        setLoading(true);
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/?limit=2000`)
          .then((response) => {
            const pokemonData = response.data.results;

            setAllPokemon(
              pokemonData.map((pokemon) => ({
                value: pokemon.name,
                label: pokemon.name,
              }))
            );
          });
      }
      setLoading(false);
    }
  }, [openModal, allPokemon.length]);

  return (
    <main id="pokemon">
      <Modal
        open={openModal === "Pokemon"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="pokemonsCard">
          <button onClick={onClose}>&#x24B3;</button>
          <form onSubmit={searchPokemon}>
            {/* <input
              type="text"
              name="pokemonname"
              id="pokemonname"
              placeholder="enter pokemon name"
              autoComplete="off"
              onChange={(event) => {
                setPokemonName(event.target.value.toLowerCase());
              }}
            /> */}
            <Select
              options={allPokemon}
              theme={(theme) => ({
                ...theme,
                borderRadius: ".5rem",
                colors: {
                ...theme.colors,
                neutral50: "#FFF",
                primary: '#f8c947',
                },
              })}
              styles={{
                control: (base) => ({
                  ...base,
                  color: "#FFF",
                  background: "transparent",
                  borderColor: "#f8c947",
                }),
                option: () => ({
                    color: "#3661ab",
                    fontSize: "1.25rem",
                    fontFamily: "Impact",
                    textAlign: "left",
                    paddingLeft: "1rem",
                    background: "#f8c947",
                    paddingTop: ".5rem",
                    paddingBottom: ".5rem",
                }),
              }}
              onChange={(newValue) => {
                searchPokemon(newValue.value);
              }}
              isClearable={true}
              openMenuOnFocus={false}
              openMenuOnClick={false}
              placeholder="start typing pokemon name ..."
              className="autocompleteSelect"
              value={null}
            />
            <Button disabled={true} className="searchBtn">
              {loading ? <>loading...</> : ""}
            </Button>
          </form>

          {error ? (
            <h1>{error}</h1>
          ) : (
            <>
              {!pokemonShow ? (
                pokemonImage
              ) : (
                <>
                  <span>
                    <h1>{pokemon.name}</h1>
                  </span>

                  <section>
                    {/* {getGifMatch !== undefined ? getGifMatch() : ""} */}
                    {pokemonImage || null}
                  </section>

                  <span className="specDetailsSpan">
                    <section
                      style={{
                        backgroundImage: "url(" + pokemonworldmap + ")",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        width: "37rem",
                        marginBottom: "-1.25rem",
                      }}
                    >
                      <p className="horizontalLine"></p>
                      <img src={pokemon.image} alt="" className="nonGifImage" />

                      <h2>
                        <span className="specDetails species">
                          species:&nbsp;
                        </span>
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
                  </span>
                </>
              )}
            </>
          )}
        </Box>
      </Modal>
    </main>
  );
};
export default Pokemon;
