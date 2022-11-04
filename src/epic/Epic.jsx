import React from "react";
import Modal from "@mui/material/Modal";
// import Quiz from "react-quiz-component";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Epic.scss";
import { style } from "../mui.js";

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
            {/* <Quiz /> */}
            <Button type="button" className="submitBtn">
              submit
            </Button>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default Epic;
