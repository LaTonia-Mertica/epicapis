import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Last.scss";
import { style } from "../mui.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";

const Last = ({ openModal, onClose }) => {
  const [lastSelection, setLastSelection] = useState();

  const submit = () => {
    console.log(lastSelection);
    if (lastSelection) {
      window.localStorage.setItem(
        "lastSelection",
        JSON.stringify(lastSelection)
      );
    }
  };

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
            <fieldset
              onChange={(event) => {
                setLastSelection(event.target.value);
              }}
            >
              <span>
                <p className="para1 bothPara">
                  {/* <input type="image" src={faRecordVinyl} value="no chance" /> */}
                  <input
                    type="radio"
                    value="No Chance"
                    name="last"
                    selected={lastSelection === "No Chance"}
                  />
                  <FontAwesomeIcon icon={faRecordVinyl} className="fa-lg " />
                  <label htmlFor="chance">No Chance</label>
                  <br />

                  <input
                    type="radio"
                    value="Empty Promises"
                    name="last"
                    selected={lastSelection === "Empty Promises"}
                  />
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="promises">Empty Promises</label>
                  <br />

                  <input
                    type="radio"
                    value="Reasons to Quit"
                    name="last"
                    selected={lastSelection === "Reasons to Quit"}
                  />
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="quit">Reasons to Quit</label>
                  <br />

                  <input
                    type="radio"
                    value="Not to Try"
                    name="last"
                    selected={lastSelection === "Not to Try"}
                  />
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="matters">Not to Try</label>
                  <br />

                  <input
                    type="radio"
                    value="Having No One"
                    name="last"
                    selected={lastSelection === "Having No Chance"}
                  />
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="alone">Having No One</label>
                  <br />
                </p>

                <p className="para2 bothPara">
                  <input
                    type="radio"
                    value="Help Less Ness"
                    name="last"
                    selected={lastSelection === "Help Less Ness"}
                  />
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="helplessness">Help Less Ness</label>
                  <br />

                  <input
                    type="radio"
                    value="Ill Intent For Me"
                    name="last"
                    selected={lastSelection === "Ill Intent For Me"}
                  />
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="illintent">Ill Intent For Me</label>
                  <br />

                  <input
                    type="radio"
                    value="Time Wasted"
                    name="last"
                    selected={lastSelection === "Time Wasted"}
                  />
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="time">Time Wasted</label>
                  <br />

                  <input
                    type="radio"
                    value="No Sight of Hope"
                    name="last"
                    selected={lastSelection === "No Sight of Hope"}
                  />
                  <FontAwesomeIcon
                    icon={faRecordVinyl}
                    className="fa-lg"
                    type="submit"
                  />
                  <label htmlFor="hope">No Sight of Hope</label>
                  <br />

                  <input
                    type="radio"
                    value="Bad Surprises"
                    name="last"
                    selected={lastSelection === "Bad Surprises"}
                  />
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
            <button type="submit" className="submitBtn" onClick={submit}>
              submit
            </button>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default Last;
