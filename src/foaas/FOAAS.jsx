import React from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./FOAAS.scss";
import { style } from "../mui.js";

const FOAAS = ({ openModal, onClose }) => {
  async function foaas(input) {
    const url = "https://foaas.com";
    const response = await axios(`${url}${input}`);
    console.log(`${response.data.message} ${response.data.subtitle}`);
  }

  // **note:** reasons this api uses axios:
  // axios and fetch are used in the epic apis project for practice with both libraries
  // asycn/await and .then are both used in the epic apis project for familiarity with both types of asynchronous code syntax
  // fetch and async/await are the more modern and preferred methods

  // foaas("/ahole/La'Tonia Mertica");

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
          <div>
            <p className="foaasText">{foaas.message}</p>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default FOAAS;
