import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Epic.scss";
import { style } from "../mui.js";
import epicModelImg from "./images/epic-model-prototype.png";

const Epic = ({ openModal, onClose }) => {
  return (
    <main>
      <Modal
        open={openModal === "Epic"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="epicCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <a href={epicModelImg} download>
              <img
                src={epicModelImg}
                alt="Epic Model Prototype Resource"
                width="103%"
                height="auto"
                title="click to download"
              />
            </a>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default Epic;
