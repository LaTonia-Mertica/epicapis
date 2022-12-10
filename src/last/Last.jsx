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
                  <label htmlFor="chance">
                    <FontAwesomeIcon
                      icon={faRecordVinyl}
                      className="fa-md customIcons"
                    />
                    <input
                      type="radio"
                      value="No Chance"
                      name="last"
                      selected={lastSelection === "No Chance"}
                    />
                    &nbsp;&nbsp;&nbsp;No Chance
                  </label>
                  <br />

                  <label htmlFor="promises">
                    <FontAwesomeIcon
                      icon={faRecordVinyl}
                      className="fa-md customIcons"
                      type="submit"
                    />
                    <input
                      type="radio"
                      value="Empty Promises"
                      name="last"
                      selected={lastSelection === "Empty Promises"}
                    />
                    &nbsp;&nbsp;&nbsp;Empty Promises
                  </label>
                  <br />

                  <label htmlFor="quit">
                    <FontAwesomeIcon
                      icon={faRecordVinyl}
                      className="fa-md customIcons"
                      type="submit"
                    />
                    <input
                      type="radio"
                      value="Reasons to Quit"
                      name="last"
                      selected={lastSelection === "Reasons to Quit"}
                    />
                    &nbsp;&nbsp;&nbsp;Reasons to Quit
                  </label>
                  <br />

                  <label htmlFor="matters">
                    <FontAwesomeIcon
                      icon={faRecordVinyl}
                      className="fa-md customIcons"
                      type="submit"
                    />
                    <input
                      type="radio"
                      value="Not to Try"
                      name="last"
                      selected={lastSelection === "Not to Try"}
                    />
                    &nbsp;&nbsp;&nbsp;Not to Try
                  </label>
                  <br />

                  <label htmlFor="alone">
                    <FontAwesomeIcon
                      icon={faRecordVinyl}
                      className="fa-md customIcons"
                      type="submit"
                    />
                    <input
                      type="radio"
                      value="Having No One"
                      name="last"
                      selected={lastSelection === "Having No Chance"}
                    />
                    &nbsp;&nbsp;&nbsp;Having No One
                  </label>
                  <br />
                </p>

                <p className="para2 bothPara">
                  <label htmlFor="helplessness">
                    <FontAwesomeIcon
                      icon={faRecordVinyl}
                      className="fa-md customIcons"
                      type="submit"
                    />
                    <input
                      type="radio"
                      value="Help Less Ness"
                      name="last"
                      selected={lastSelection === "Help Less Ness"}
                    />
                    &nbsp;&nbsp;&nbsp;Help Less Ness
                  </label>
                  <br />

                  <label htmlFor="illintent">
                    <FontAwesomeIcon
                      icon={faRecordVinyl}
                      className="fa-md  customIcons"
                      type="submit"
                    />
                    <input
                      type="radio"
                      value="Ill Intent For Me"
                      name="last"
                      selected={lastSelection === "Ill Intent For Me"}
                    />
                    &nbsp;&nbsp;&nbsp;Ill Intent For Me
                  </label>
                  <br />

                  <label htmlFor="time">
                    <FontAwesomeIcon
                      icon={faRecordVinyl}
                      className="fa-md  customIcons"
                      type="submit"
                    />
                    <input
                      type="radio"
                      value="Time Wasted"
                      name="last"
                      selected={lastSelection === "Time Wasted"}
                    />
                    &nbsp;&nbsp;&nbsp;Time Wasted
                  </label>
                  <br />

                  <label htmlFor="hope">
                    <FontAwesomeIcon
                      icon={faRecordVinyl}
                      className="fa-md  customIcons"
                      type="submit"
                    />{" "}
                    <input
                      type="radio"
                      value="No Sight of Hope"
                      name="last"
                      selected={lastSelection === "No Sight of Hope"}
                    />
                    &nbsp;&nbsp;&nbsp;No Sight of Hope
                  </label>
                  <br />

                  <label htmlFor="surprises">
                    <FontAwesomeIcon
                      icon={faRecordVinyl}
                      className="fa-md  customIcons"
                      type="submit"
                    />
                    <input
                      type="radio"
                      value="Bad Surprises"
                      name="last"
                      selected={lastSelection === "Bad Surprises"}
                    />
                    &nbsp;&nbsp;&nbsp;Bad Surprises
                  </label>
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
