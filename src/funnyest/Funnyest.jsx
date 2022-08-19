import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Funnyest.scss";

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

function Funnyest({ openModal, onClose, funnyest, setFunnyest }) {
  const submit = () => {
    console.log(funnyest);
  };

  return (
    <main>
      <Modal
        open={openModal === "Funnyest"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="funnyestCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <fieldset>
              <p>
                <select
                  name="funnyest"
                  id="funnyest"
                  value={funnyest}
                  onChange={(evt) => {
                    setFunnyest(evt.target.value);
                  }}
                >
                  <option value="whoopigoldberg">Whoopi Goldberg🤭</option>
                  <option value="davidmann">David Mann😝</option>
                  <option value="lawandapage">LaWanda Page🤣</option>
                  <option value="wandasykes" selected>
                    Wanda Sykes😜
                  </option>
                  <option value="roberttownsend">Robert Townsend😂</option>
                </select>
              </p>
            </fieldset>
            <Button type="button" className="submitBtn" onClick={submit}>
              submit
            </Button>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default Funnyest;
