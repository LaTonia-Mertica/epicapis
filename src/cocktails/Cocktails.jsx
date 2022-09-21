import React, { useEffect, useState } from "react";
// import axios from "axios";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Cocktails.scss";

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
  fontSize: "1.5rem",
  textTransform: "lowercase",
  fontFamily: "Arial, Helvetica, sans-serif",

  maxHeight: "90vh",
  overflow: "scroll",
};

function Cocktails({ openModal, onClose }) {
  const [cocktail, setCocktail] = useState();

  const apikey = require("./apikey");

  useEffect(() => {
    (async () => {
      const data = await fetch(
        `https://www.thecocktaildb.com/api/json/v2/${apikey}/random.php`
      );

      const json = await data.json();
      // test
      // console.log(json);
      setCocktail(json.drinks[0]);
    })();
  }, [apikey]);

  return (
    <main>
      <Modal
        open={openModal === "Cocktails"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="cocktailsCard">
          <Button onClick={onClose}>&#x274C;</Button>

          {cocktail && (
            <div className="detailsDiv">
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              <h2>{cocktail.strDrink}</h2>

              <div>
                <h3>
                  <span className="detailHeaders">type:</span>
                  <br />
                  {cocktail.strCategory}
                </h3>
                <h3>
                  <span className="detailHeaders"> dressing:</span>
                  <br />
                  {cocktail.strGlass}
                </h3>
              </div>

              <div>
                <h3>
                  <span className="detailHeaders">part:</span>
                  <br />
                  {cocktail.strIngredient1}
                </h3>
                <h3>
                  <span className="detailHeaders"> part:</span>
                  <br />
                  {cocktail.strIngredient2}
                </h3>
                <h3>
                  <span className="detailHeaders"> part:</span>
                  <br />
                  {cocktail.strIngredient3}
                </h3>
              </div>

              <h3 className="instructions">
                <span className="detailHeaders">instructions:</span>
                <br />
                <span id="instructions">{cocktail.strInstructions}</span>
              </h3>
            </div>
          )}
        </Box>
      </Modal>
    </main>
  );
}
export default Cocktails;
