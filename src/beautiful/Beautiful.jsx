import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Beautiful.scss";
import { style } from "../mui.js";

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

const Beautiful = ({ openModal, onClose }) => {
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
              <img src={appropriate} alt="" width="9%" height="auto" />
              <img src={bold} alt="" width="9%" height="auto" />
              <img src={clean} alt="" width="9%" height="auto" />
              <img src={clear} alt="" width="9%" height="auto" />
              <img src={comfy} alt="" width="9%" height="auto" />
              <img src={consistent} alt="" width="9%" height="auto" />
              <img src={efficient} alt="" width="9%" height="auto" />
            </section>

            <section>
              <img src={elegant} alt="" width="9%" height="auto" />
              <img src={fun} alt="" width="9%" height="auto" />
              <img src={functional} alt="" width="9%" height="auto" />
              <img src={modular} alt="" width="9%" height="auto" />
              <img src={sensible} alt="" width="9%" height="auto" />
              <img src={simple} alt="" width="9%" height="auto" />
              <img src={testseasy} alt="" width="9%" height="auto" />
            </section>

            <Button type="button" className="submitBtn">
              submit
            </Button>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default Beautiful;
