import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Deblur } from "@mui/icons-material";

import "./Sexiest.scss";
import { style } from "../mui.js";

const Sexiest = ({ openModal, onClose }) => {
  return (
    <main>
      <Modal
        open={openModal === "Sexiest"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="sexiestCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div className="fieldsetDiv">
            <fieldset>
              <legend className="feminineLegend">Sexiest Feminine</legend>
              <p className="sexiestPara para1">
                <Deblur className="deblur" />
                <label htmlFor="catwoman">Catwoman</label>
              </p>
              <p className="sexiestPara para1">
                <Deblur className="deblur" />
                <label htmlFor="shera">She-Ra</label>
              </p>
              <p className="sexiestPara para1">
                <Deblur className="deblur" />
                <label htmlFor="wonderwoman">Wonder Woman</label>
              </p>
            </fieldset>

            <fieldset>
              <legend className="masculineLegend">Sexiest Masculine</legend>
              <p className="sexiestPara para2">
                <Deblur className="deblur" />
                <label htmlFor="batman">Batman</label>
                <br />
              </p>
              <p className="sexiestPara para2">
                <Deblur className="deblur" />
                <label htmlFor="spiderman">Spider-Man</label>
                <br />
              </p>
              <p className="sexiestPara para2">
                <Deblur className="deblur" />
                <label htmlFor="superman">Superman</label>
                <br />
              </p>
            </fieldset>

            <fieldset>
              <legend className="nonbinaryLegend">Sexiest Non Binary</legend>
              <p className="sexiestPara para3">
                <Deblur className="deblur" />
                <label htmlFor="snowflake">Snow Flake</label>
                <br />
              </p>
              <p className="sexiestPara para3">
                <Deblur className="deblur" />
                <label htmlFor="brotherken">Brother Ken</label>
                <br />
              </p>
              <p className="sexiestPara para3">
                <Deblur className="deblur" />
                <label htmlFor="kidquick">Kid Quick</label>
                <br />
              </p>
            </fieldset>
          </div>
          <button type="submit" className="submitBtn">
            submit
          </button>
        </Box>
      </Modal>
    </main>
  );
};
export default Sexiest;
