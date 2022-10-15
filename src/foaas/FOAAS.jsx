import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./FOAAS.scss";
import { style } from "../mui.js";

const FOAAS = ({ openModal, onClose }) => {
  const [foaas, setFoaas] = useState();
  const [loading, setLoading] = useState(false);
  const { options } = require("./options");

  const getFoaas = async () => {
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
  };

  useEffect(() => {
    getFoaas();
    // eslint-disable-next-line
  }, []);

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
              <p> {foaas.subtitle}&nbsp;-</p>
            </div>
          )}
        </Box>
      </Modal>
    </main>
  );
};
export default FOAAS;
