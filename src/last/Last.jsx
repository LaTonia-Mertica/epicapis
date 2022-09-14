import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Last.scss";
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

function Last({ openModal, onClose }) {
  return (
    <main>
      <Modal
        open={openModal === "Last"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="lastCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <fieldset>
              <span>
                <p className="lastPara para1">
                  <input
                    type="checkbox"
                    name="last"
                    id="negativebalance"
                    value="negativebalance"
                  />
                  <label htmlFor="negativebalance">Not Be Given a Chance</label>
                  <br />

                  <input
                    type="checkbox"
                    name="last"
                    id="brokenvehicle"
                    value="brokenvehicle"
                  />
                  <label htmlFor="brokenvehicle">
                    Learn Nothing I Do Matters
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="last"
                    id="migraine"
                    value="migraine"
                  />
                  <label htmlFor="migraine">Empty Promises</label>
                  <br />

                  <input
                    type="checkbox"
                    name="last"
                    id="youscreaming"
                    value="youscreaming"
                  />
                  <label htmlFor="youscreaming">Another Reason to Quit</label>
                  <br />

                  <input
                    type="checkbox"
                    name="last"
                    id="newaddiction"
                    value="newaddiction"
                  />
                  <label htmlFor="newaddiction">Be Alone in The World</label>
                  <br />
                </p>

                <p className="lastPara para2">
                  <input
                    type="checkbox"
                    name="last"
                    id="hopelost"
                    value="hopelost"
                  />
                  <label htmlFor="hopelost">Lose Sight of Hope</label>
                  <br />

                  <input
                    type="checkbox"
                    name="last"
                    id="crunchyknees"
                    value="crunchyknees"
                  />
                  <label htmlFor="crunchyknees">Horrible Surprises</label>
                  <br />

                  <input
                    type="checkbox"
                    name="last"
                    id="falsepromises"
                    value="falsepromises"
                  />
                  <label htmlFor="falsepromises">Help Less Ness</label>
                  <br />

                  <input
                    type="checkbox"
                    name="last"
                    id="eternaldamnation"
                    value="eternaldamnation"
                  />
                  <label htmlFor="eternaldamnation">Lose My Independence</label>
                  <br />

                  <input
                    type="checkbox"
                    name="last"
                    id="chronicpain"
                    value="chronicpain"
                  />
                  <label htmlFor="chronicpain">Waste Time</label>
                  <br />
                </p>
              </span>
            </fieldset>
            <button type="button" className="submitBtn">
              submit
            </button>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default Last;
