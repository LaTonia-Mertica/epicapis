import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./FOAAS.scss";
import axios from "axios";

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

function FOAAS({ openModal, onClose }) {
  async function foaas(input) {
    const url = "https://foaas.com";
    const response = await axios(`${url}${input}`);
    console.log(`${response.data.message} ${response.data.subtitle}`);
  }

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
          <Button></Button>
          <div>
            <p className="foaasText">{foaas.message}</p>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default FOAAS;
