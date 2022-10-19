import React from "react";
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
                <p className="para1 bothPara">
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
                  <label htmlFor="chance">No Chance</label>
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
                  <label htmlFor="quit">Reasons to Quit</label>
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
                  <label htmlFor="matters">Not to Try</label>
                  <br />

                  {/* <input type="checkbox" name="last" id="alone" value="alone" /> */}
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="alone">Having No One</label>
                  <br />
                </p>

                <p className="para2 bothPara">
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
                  <label htmlFor="illintent">Ill Intent For Me</label>
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
                  <label htmlFor="hope">No Sight of Hope</label>
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
                  <label htmlFor="surprises">Bad Surprises</label>
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
