import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Pokemon.scss";
import axios from "axios";

import pikachuhi from "./images/pikachuhi.gif";
import { bgcolor } from "@mui/system";
import { ManOutlined } from "@mui/icons-material";

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

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/` + pokemonName)
      .then((response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          type: response.data.types[0].type.name,
          image: response.data.sprites.front_default,
        });
      });
    setPokemonShow(true);
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
          <div>
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
          </div>
          {/* gif credit: tenor.com */}
          <div>
            {!pokemonShow ? (
              <img
                src={pikachuhi}
                alt="Pikachu Hi"
                width="11%"
                height="7%"
                className="gif"
              ></img>
            ) : (
              <h1>{pokemonName}</h1>
            )}
          </div>

          <img src={pokemon.image} alt="Pokemon" className="pokemonImg" />
          <section>
            <h2>
              <span>species: </span>
              {pokemon.species}
            </h2>
            <h2>
              <span>variety: </span>
              {pokemon.type}
            </h2>
          </section>
          <Button onClick={searchPokemon}>Search Pokemon</Button>
        </Box>
      </Modal>
    </main>
  );
}
export default Pokemon;
