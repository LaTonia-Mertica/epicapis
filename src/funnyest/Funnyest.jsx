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
            <fieldset
              className="funnyestFieldset"
              name="funnyest"
              id="funnyest"
              value={funnyest}
              onChange={(evt) => {
                setFunnyest(evt.target.value);
              }}
            >
              <span>
                <p className="funnyestPara para1">
                  <input
                    type="checkbox"
                    name="funnyest"
                    id="anthonyanderson"
                    value="anthonyanderson"
                  />
                  <label htmlFor="anthonyanderson">Anthony Anderson</label>
                  <br />

                  <input
                    type="checkbox"
                    name="funnyest"
                    id="cedrictheentertainer"
                    value="cedrictheentertainer"
                  />
                  <label htmlFor="cedrictheentertainer">
                    Cedric 'The Entertainer'
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="funnyest"
                    id="whoopigoldberg"
                    value="whoopigoldberg"
                  />
                  <label htmlFor="whoopigoldberg">Whoopi Goldberg</label>
                  <br />

                  <input
                    type="checkbox"
                    name="funnyest"
                    id="orlandojones"
                    value="orlandojones"
                  />
                  <label htmlFor="orlandojones">Orlando Jones</label>
                  <br />

                  <input
                    type="checkbox"
                    name="funnyest"
                    id="berniemac"
                    value="berniemac"
                  />
                  <label htmlFor="berniemac">Bernie Mac</label>
                  <br />
                </p>

                <p className="funnyestPara para2">
                  <input
                    type="checkbox"
                    name="funnyest"
                    id="davidmann"
                    value="davidmann"
                  />
                  <label htmlFor="davidmann">David Mann</label>
                  <br />

                  <input
                    type="checkbox"
                    name="funnyest"
                    id="eddiemurphy"
                    value="eddiemurphy"
                  />
                  <label htmlFor="eddiemurphy">Eddie Murphy</label>
                  <br />

                  <input
                    type="checkbox"
                    name="funnyest"
                    id="lawandapage"
                    value="lawandapage"
                  />
                  <label htmlFor="lawandapage">LaWanda Page</label>
                  <br />

                  <input
                    type="checkbox"
                    name="funnyest"
                    id="wandasykes"
                    value="wandasykes"
                  />
                  <label htmlFor="wandasykes">Wanda Sykes</label>
                  <br />

                  <input
                    type="checkbox"
                    name="funnyest"
                    id="roberttownsend"
                    value="roberttownsend"
                  />
                  <label htmlFor="roberttownsend">Robert Townsend</label>
                  <br />
                </p>
              </span>
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
