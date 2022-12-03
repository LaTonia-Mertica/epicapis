import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import options from "./options";

import "./FOAAS.scss";
import { style } from "../mui.js";

const FOAAS = ({ openModal, onClose }) => {
  const [foaas, setFoaas] = useState();
  const [loading, setLoading] = useState(false);

  const errorMessages = [
    "Oh My! Server Responded With Error.",
    "Server Error. Try/Catch says 'Fuck Off'.",
    "Guess Who's Been Heroku'ed!",
    "Next Time, Maybe. Server in 'Oh Fuck' Mode.",
    "Not Happening. Not My Fault. Not Just Saying.",
    "Here We Are Waiting On a Server That Has No Fucks to Give.",
    "Worry None. When Server Back Online, You'll Get the Effing Goods.",
    "BONUS: Since You're Here, Refresh a Few Times. The FOAAS Cover Image is Randomized. That Sh#te is Fucking Awesome. Am I Right?!",
  ];

  const getFoaas = async () => {
    try {
      const option = options[Math.floor(Math.random() * options.length)];
      setLoading(true);
      const response = await fetch(
        `https://foaas.com/${option}/Bad Code Day aka Ranting Baby`,
        {
          headers: { Accept: "application/json" },
        }
      );
      const data = await response.json();
      setFoaas(data);
      setLoading(false);
    } catch (error) {
      let option =
        errorMessages[Math.floor(Math.random() * errorMessages.length)];

      //make sure the new error message is not the same as the currently displayed message, if it is, pick a different one
      while (foaas?.message === option) {
        option =
          errorMessages[Math.floor(Math.random() * errorMessages.length)];
        setFoaas({
          message: option,
          subtitle: "WHAT THE FUCK",
        });
      }
      setLoading(false);
      setFoaas({
        message: option,
        subtitle: "WHAT THE FUCK",
      });
    }
  };

  useEffect(() => {
    getFoaas();
  }, []);

  useEffect(() => {
    if (!openModal) {
      getFoaas();
    }
  }, [openModal]);

  return (
    <main>
      <Modal
        open={openModal === "FOAAS"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="foaasCard">
          <Button onClick={onClose}>&#x1E8A;</Button>
          <button className="changeFoaasBtn" onClick={getFoaas}>
            {loading ? <>loading...</> : <>temper time</>}
          </button>
          {foaas && (
            <div>
              <h1>{foaas.message}</h1>
              <p>-&nbsp;{foaas.subtitle}&nbsp;-</p>
            </div>
          )}
        </Box>
      </Modal>
    </main>
  );
};
export default FOAAS;
