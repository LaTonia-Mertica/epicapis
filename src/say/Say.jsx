import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Say.scss";
import { style } from "../mui.js";
import phraseGenerator from "./phraseGenerator";

const Say = ({ openModal, onClose }) => {
  const [phraseToShow, setPhraseToShow] = useState();
  const [saySelection, setSaySelection] = useState();

  const valueSelected = (event) => {
    phraseGenerator(setPhraseToShow, event.target.value);
  };

  const submit = (event) => {
    console.log(saySelection);
    if (saySelection) {
      event.preventDefault();
      window.localStorage.setItem("saySelection", JSON.stringify(saySelection));
    }
  };

  useEffect(() => {
    if (!openModal) {
      setPhraseToShow();
    }
  }, [openModal]);

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
              <fieldset
                onChange={(event) => {
                  setSaySelection(event.target.value);
                }}
              >
                <p className="sayPara">
                  <label htmlFor="neversay"></label>
                  <select
                    name="neversay"
                    id="neversay"
                    onChange={valueSelected}
                    // onChange={(event) => {
                    //   setSaySelection(event.target.value);
                    // }}
                  >
                    <optgroup label="DEMOGRAPHICS" className="optgroup1">
                      <option
                        value=""
                        disabled
                        selected
                        hidden
                        className="optionClickPrompt"
                      >
                        select your #1 never say
                      </option>

                      <option value="Age" id="age">
                        age
                      </option>

                      <option value="Arrest Record" id="arrestRecord">
                        arrest record
                      </option>
                      <option value="Audible Expression" id="audibleExpression">
                        audible expression
                      </option>
                      <option value="Color" id="color">
                        color
                      </option>
                      <option value="Conviction Record" id="convictionRecord">
                        conviction record
                      </option>
                      <option value="Creed" id="creed">
                        creed
                      </option>
                      <option value="Employment" id="employment">
                        employment
                      </option>
                      <option value="National Origin" id="nationalOrigin">
                        national origin
                      </option>
                      <option value="Race" id="race">
                        race
                      </option>
                      <option value="Religion" id="religion">
                        religion
                      </option>
                      <option value="Weight" id="weight">
                        weight
                      </option>
                      <option value=""></option>
                    </optgroup>

                    <optgroup label="WELLBEING" className="optgroup2">
                      <option value="Disability" id="disability">
                        disability
                      </option>
                      <option
                        value="Domestic Violence Victim Status"
                        id="domesticViolenceVictimStatus"
                      >
                        domestic violence victim status
                      </option>
                      <option value="Employment Status" id="employmentStatus">
                        employment status
                      </option>
                      <option value="Gender Identity" id="genderIdentity">
                        gender identity
                      </option>
                      <option value="Gender Expression" id="genderExpression">
                        gender expression
                      </option>
                      <option value="Familial Status" id="familialStatus">
                        familial status
                      </option>
                      <option value="Marital Status" id="maritalStatus">
                        marital status
                      </option>
                      <option
                        value="Mental Health Status"
                        id="mentalHealthStatus"
                      >
                        mental health status
                      </option>
                      <option
                        value="Predisposing Genetic Characteristics"
                        id="predisposingGeneticCharacteristics"
                      >
                        predisposing genetic characteristics
                      </option>
                      <option value="Sex" id="sex">
                        sex
                      </option>
                      <option value="Sexual Orientation" id="sexualOrientation">
                        sexual orientation
                      </option>
                    </optgroup>
                  </select>
                  <p className="phraseToShowText">{phraseToShow}</p>
                </p>
              </fieldset>

              <button
                type="submit"
                value="submit"
                className="submitBtn"
                onClick={submit}
              >
                submit
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default Say;
