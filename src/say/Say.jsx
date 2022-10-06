import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Say.scss";
import { style } from "../mui.js";
import phraseGenerator from "./phraseGenerator";

function Say({ openModal, onClose }) {
  const [phraseToShow, setPhraseToShow] = useState();

  const valueSelected = (evt) => {
    phraseGenerator(setPhraseToShow, evt.target.value);
  };
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
                  <select
                    name="neversay"
                    id="neversay"
                    onChange={valueSelected}
                  >
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

                      <option value="age" id="age">
                        age
                      </option>

                      <option value="arrest record" id="arrestRecord">
                        arrest record
                      </option>
                      <option value="audible expression" id="audibleExpression">
                        audible expression
                      </option>
                      <option value="color" id="color">
                        color
                      </option>
                      <option value="conviction record" id="convictionRecord">
                        conviction record
                      </option>
                      <option value="creed" id="creed">
                        creed
                      </option>
                      <option value="employment" id="employment">
                        employment
                      </option>
                      <option value="national origin" id="nationalOrigin">
                        national origin
                      </option>
                      <option value="race" id="race">
                        race
                      </option>
                      <option value="religion" id="religion">
                        religion
                      </option>
                      <option value="weight" id="weight">
                        weight
                      </option>
                      <option value=""></option>
                    </optgroup>

                    <optgroup label="WELLBEING" className="optgroup2">
                      <option value="disability" id="disability">
                        disability
                      </option>
                      <option
                        value="domestic violence victim status"
                        id="domesticViolenceVictimStatus"
                      >
                        domestic violence victim status
                      </option>
                      <option value="employment status" id="employmentStatus">
                        employment status
                      </option>
                      <option value="gender identity" id="genderIdentity">
                        gender identity
                      </option>
                      <option value="gender expression" id="genderExpression">
                        gender expression
                      </option>
                      <option value="familial status" id="familialStatus">
                        familial status
                      </option>
                      <option value="marital status" id="maritalStatus">
                        marital status
                      </option>
                      <option
                        value="mental health status"
                        id="mentalHealthStatus"
                      >
                        mental health status
                      </option>
                      <option
                        value="predisposing genetic characteristics"
                        id="predisposingGeneticCharacteristics"
                      >
                        predisposing genetic characteristics
                      </option>
                      <option value="sex" id="sex">
                        sex
                      </option>
                      <option value="sexual orientation" id="sexualOrientation">
                        sexual orientation
                      </option>
                    </optgroup>
                  </select>
                  <p>{phraseToShow}</p>
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
