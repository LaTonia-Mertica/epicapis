import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Cocktails.scss";
import { style } from "../mui.js";

const Cocktails = ({ openModal, onClose }) => {
  const [cocktail, setCocktail] = useState();

  const apikey = require("./apikey");

  const getDrink = async () => {
    const data = await fetch(
      `https://www.thecocktaildb.com/api/json/v2/${apikey}/random.php`
    );

    const json = await data.json();

    setCocktail(json.drinks[0]);
  };

  useEffect(() => {
    getDrink();
    // eslint-disable-next-line
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
          <Button onClick={onClose}>&#x2620;</Button>

          {cocktail && (
            <div className="detailsDiv">
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />

              <h2>{cocktail.strDrink}</h2>
              <button onClick={getDrink} className="refreshDrinkBtn">
                refresh drink
              </button>

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

              <div>
                <h3>
                  <span className="detailHeaders">measure</span>
                  <br />
                  {cocktail.strMeasure1}
                </h3>
                <h3>
                  <span className="detailHeaders">measure</span>
                  <br />
                  {cocktail.strMeasure2}
                </h3>
                <h3>
                  <span className="detailHeaders">measure</span>
                  <br />
                  {cocktail.strMeasure3}
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
};
export default Cocktails;
