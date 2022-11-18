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
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="chance">No Chance</label>
                  <br />

                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="promises">Empty Promises</label>
                  <br />

                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="quit">Reasons to Quit</label>
                  <br />

                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="matters">Not to Try</label>
                  <br />

                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="alone">Having No One</label>
                  <br />
                </p>

                <p className="para2 bothPara">
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="helplessness">Help Less Ness</label>
                  <br />

                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="illintent">Ill Intent For Me</label>
                  <br />

                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="time">Time Wasted</label>
                  <br />

                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="hope">No Sight of Hope</label>
                  <br />

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
