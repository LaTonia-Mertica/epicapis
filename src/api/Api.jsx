import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Api.scss";
import { style } from "../mui.js";
import API from "./images/API.png";

const Api = ({ openModal, onClose }) => {
  return (
    <main>
      <Modal
        open={openModal === "Api"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="apiCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <img src={API} alt="API Resource" width="103%" height="auto" />
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default Api;
