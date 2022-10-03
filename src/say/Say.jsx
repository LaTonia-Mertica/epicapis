import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Say.scss";
import { style } from "../mui.js";

function Say({ openModal, onClose }) {
  return (
    <main>
      <Modal
        open={openModal === "Say"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="sayCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <form action="#">
              <fieldset>
                <p className="sayPara">
                  <label htmlFor="neversay"></label>
                  <select name="neversay" id="neversay">
                    <optgroup label="DEMOGRAPHICS" className="optgroup1">
                      <option
                        value=""
                        disabled
                        selected
                        hidden
                        className="optionClickPrompt"
                      >
                        select what matters most to you
                      </option>
                      <option value="age" className="sayTopicText">
                        age
                      </option>
                      <option value="arrest record" className="sayTopicText">
                        arrest record
                      </option>
                      <option
                        value="audible expression"
                        className="sayTopicText"
                      >
                        audible expression
                      </option>
                      <option value="color" className="sayTopicText">
                        color
                      </option>
                      <option
                        value="conviction record"
                        className="sayTopicText"
                      >
                        conviction record
                      </option>
                      <option value="creed" className="sayTopicText">
                        creed
                      </option>
                      <option value="employment" className="sayTopicText">
                        employment
                      </option>
                      <option value="national origin" className="sayTopicText">
                        national origin
                      </option>
                      <option value="race" className="sayTopicText">
                        race
                      </option>
                      <option value="religion" className="sayTopicText">
                        religion
                      </option>
                      <option value="weight" className="sayTopicText">
                        weight
                      </option>
                      <option value="" className="sayTopicText"></option>
                    </optgroup>

                    <optgroup label="WELLBEING" className="optgroup2">
                      <option value="disability" className="sayTopicText">
                        disability
                      </option>
                      <option
                        value="domestic violence victim status"
                        className="sayTopicText"
                      >
                        domestic violence victim status
                      </option>
                      <option
                        value="employment status"
                        className="sayTopicText"
                      >
                        employment status
                      </option>
                      <option value="gender identity" className="sayTopicText">
                        gender identity
                      </option>
                      <option
                        value="gender expression"
                        className="sayTopicText"
                      >
                        gender expression
                      </option>
                      <option value="familial status" className="sayTopicText">
                        familial status
                      </option>
                      <option value="marital status" className="sayTopicText">
                        marital status
                      </option>
                      <option
                        value="mental health status"
                        className="sayTopicText"
                      >
                        mental health status
                      </option>
                      <option
                        value="predisposing genetic characteristics"
                        className="sayTopicText"
                      >
                        predisposing genetic characteristics
                      </option>
                      <option value="sex" className="sayTopicText">
                        sex
                      </option>
                      <option
                        value="sexual orientation"
                        className="sayTopicText"
                      >
                        sexual orientation
                      </option>
                    </optgroup>
                  </select>

                  {/* <datalist id="neversay-list">
                  <option value="age">
                    humanity is dying because of people like you
                  </option>
                  <option value="arrest or conviction record">
                    what'd you do, you violent, should we be worried
                  </option>
                  <option value="color">
                    your skin is really dark, can I touch it
                  </option>
                  <option value="creed and/or religion">
                    they can hardly be called human being so barbaric
                  </option>
                  <option value="disability">
                    are you high-functioning enough for this
                  </option>
                  <option value="domestic violence victim status">
                    why didn't you just leave, you could've anytime
                  </option>
                  <option value="employment">
                    you wouldn't be a good cultural fit here
                  </option>
                  <option value="gender identity or expression">
                    on your birth certificate it tells you what you are
                  </option>
                  <option value="familial and/or marital status">
                    we need dependable folks, how can we know you are
                  </option>
                  <option value="national origin">
                    go back where you came from
                  </option>
                  <option value="predisposing genetic characteristics">
                    wow, you got a bad seed huh - bummer
                  </option>
                  <option value="race">
                    so well spoken - you are a credit to your people
                  </option>
                  <option value="sex">
                    now, of course, it is all your own fault
                  </option>
                  <option value="sexual orientation">
                    sure you're gay, you don't look homosexual
                  </option>
                </datalist> */}
                </p>
              </fieldset>

              <button type="submit" value="submit" className="submitBtn">
                submit
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default Say;
