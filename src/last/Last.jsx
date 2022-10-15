import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Last.scss";
import { style } from "../mui.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";

const Last = ({ openModal, onClose }) => {
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
          <div className="lastDiv">
            <fieldset>
              <span>
                <p className="lastPara para1">
                  {/* <input
                    type="checkbox"
                    name="last"
                    id="chance"
                    value="chance"
                  /> */}
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="chance">Not Be Given a Chance</label>
                  <br />

                  {/* <input
                    type="checkbox"
                    name="last"
                    id="promises"
                    value="promises"
                  /> */}
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="promises">Empty Promises</label>
                  <br />

                  {/* <input type="checkbox" name="last" id="quit" value="quit" /> */}
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="quit">Another Reason to Quit</label>
                  <br />

                  {/* <input
                    type="checkbox"
                    name="last"
                    id="matters"
                    value="matters"
                  /> */}
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="matters">Nothing I Do Matters</label>
                  <br />

                  {/* <input type="checkbox" name="last" id="alone" value="alone" /> */}
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="alone">Be Alone in The World</label>
                  <br />
                </p>

                <p className="lastPara para2">
                  {/* <input
                    type="checkbox"
                    name="last"
                    id="helplessness"
                    value="helplessness"
                  /> */}
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="helplessness">Help Less Ness</label>
                  <br />

                  {/* <input
                    type="checkbox"
                    name="last"
                    id="illintent"
                    value="illintent"
                  /> */}
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="illintent">Ill Intent Against Me</label>
                  <br />

                  {/* <input type="checkbox" name="last" id="time" value="time" /> */}
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="time">Time Wasted</label>
                  <br />

                  {/* <input type="checkbox" name="last" id="hope" value="hope" /> */}
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="hope">Lose Sight of Hope</label>
                  <br />

                  {/* <input
                    type="checkbox"
                    name="last"
                    id="surprises"
                    value="surprises"
                  /> */}
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="surprises">Horrible Surprises</label>
                  <br />
                </p>
              </span>
            </fieldset>
            <button type="submit" className="submitBtn">
              submit
            </button>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default Last;
