import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Beautiful.scss";
import appropriate from "./images/appropriate.png";
import bold from "./images/bold.png";
import clean from "./images/clean.png";
import clear from "./images/clear.png";
import comfy from "./images/comfy.png";

import consistent from "./images/consistent.png";
import efficient from "./images/efficient.png";
import elegant from "./images/elegant.png";
import fun from "./images/fun.png";
import functional from "./images/functional.png";
import modular from "./images/modular.png";
import sensible from "./images/sensible.png";
import simple from "./images/simple.png";
import testseasy from "./images/tests-easy.png";

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

function Beautiful({ openModal, onClose }) {
  return (
    <main>
      <Modal
        open={openModal === "Beautiful"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="beautifulCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <section>
              <img src={appropriate} alt="" width="13%" height="auto" />
              <img src={bold} alt="" width="13%" height="auto" />
              <img src={clean} alt="" width="13%" height="auto" />
              <img src={clear} alt="" width="13%" height="auto" />
              <img src={comfy} alt="" width="13%" height="auto" />
              <img src={consistent} alt="" width="13%" height="auto" />
              <img src={efficient} alt="" width="13%" height="auto" />
            </section>

            <section>
              <img src={elegant} alt="" width="13%" height="auto" />
              <img src={fun} alt="" width="13%" height="auto" />
              <img src={functional} alt="" width="13%" height="auto" />
              <img src={modular} alt="" width="13%" height="auto" />
              <img src={sensible} alt="" width="13%" height="auto" />
              <img src={simple} alt="" width="13%" height="auto" />
              <img src={testseasy} alt="" width="13%" height="auto" />
            </section>

            <Button type="button" className="submitBtn">
              submit
            </Button>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default Beautiful;
