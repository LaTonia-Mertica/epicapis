import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Api.scss";
import { style } from "../mui.js";

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
            <p>TEST</p>
            <Button type="button" className="submitBtn">
              submit
            </Button>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default Api;
