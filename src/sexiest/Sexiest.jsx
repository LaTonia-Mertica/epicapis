import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Sexiest.scss";

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

function Sexiest({ openModal, onClose }) {
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
              <legend className="feminineLegend">
                Sexiest Feminine Alter Ego
              </legend>
              <p className="sexiestPara para1">
                <input
                  type="radio"
                  name="categories"
                  id="Wonder Woman"
                  value="Wonder Woman"
                />
                <label htmlFor="Wonder Woman">Wonder Woman</label>
              </p>
              <p className="sexiestPara para1">
                <input
                  type="radio"
                  name="categories"
                  id="mrsincredible"
                  value="mrsincredible"
                />
                <label htmlFor="mrsincredible">Mrs. Incredible</label>
              </p>
              <p className="sexiestPara para1">
                <input
                  type="radio"
                  name="categories"
                  id="blacksheba"
                  value="blacksheba"
                />
                <label htmlFor="blacksheba">Black Sheba</label>
              </p>
            </fieldset>

            <fieldset>
              <legend className="masculineLegend">
                Sexiest Masculine Alter Ego
              </legend>
              <p className="sexiestPara para2">
                <input
                  type="radio"
                  name="categories"
                  id="shaft"
                  value="shaft"
                />
                <label htmlFor="shaft">Shaft</label>
                <br />
              </p>
              <p className="sexiestPara para2">
                <input
                  type="radio"
                  name="categories"
                  id="dolemite"
                  value="dolemite"
                />
                <label htmlFor="dolemite">Dolemite</label>
                <br />
              </p>
              <p className="sexiestPara para2">
                <input
                  type="radio"
                  name="categories"
                  id="superman"
                  value="superman"
                />
                <label htmlFor="superman">Super Man</label>
                <br />
              </p>
            </fieldset>

            <fieldset>
              <legend className="nonbinaryLegend">
                Sexiest Non Binary Alter Ego
              </legend>
              <p className="sexiestPara para3">
                <input
                  type="radio"
                  name="categories"
                  id="snowflake"
                  value="snowflake"
                />
                <label htmlFor="snowflake">Snow Flake</label>
                <br />
              </p>
              <p className="sexiestPara para3">
                <input
                  type="radio"
                  name="categories"
                  id="brotherken"
                  value="brotherken"
                />
                <label htmlFor="brotherken">Brother Ken</label>
                <br />
              </p>
              <p className="sexiestPara para3">
                <input
                  type="radio"
                  name="categories"
                  id="kidquick"
                  value="kidquick"
                />
                <label htmlFor="kidquick">Kid Quick</label>
                <br />
              </p>
            </fieldset>
          </div>
          <button type="button" className="submitBtn">
            submit
          </button>
        </Box>
      </Modal>
    </main>
  );
}
export default Sexiest;
