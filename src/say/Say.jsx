import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Say.scss";
import { style } from "../mui.js";
import phraseGenerator from "./phraseGenerator";

const Say = ({ openModal, onClose }) => {
  const [saySelection, setSaySelection] = useState();
  const [phraseToShow, setPhraseToShow] = useState();

  const valueSelected = (event) => {
    phraseGenerator(setPhraseToShow, event.target.value);
  };

  const submit = (event) => {
    if (saySelection) {
      event.preventDefault();
      window.localStorage.setItem("saySelection", saySelection);
    }
    onClose();
  };

  useEffect(() => {
    if (openModal) {
      const storageString = window.localStorage.getItem("saySelection");

      if (storageString) {
        setSaySelection(storageString);
        phraseGenerator(setPhraseToShow, storageString);
      }
    }
  }, [openModal]);

  return (
    <main>
      <Modal
        open={openModal === "Say This Neva"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="sayCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <form>
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

                      <option
                        value="age"
                        id="age"
                        selected={saySelection === "age"}
                      >
                        age
                      </option>

                      <option
                        value="arrest record"
                        id="arrestRecord"
                        selected={saySelection === "arrest record"}
                      >
                        arrest record
                      </option>
                      <option
                        value="audible expression"
                        id="audibleExpression"
                        selected={saySelection === "audible expression"}
                      >
                        audible expression
                      </option>
                      <option
                        value="color"
                        id="color"
                        selected={saySelection === "color"}
                      >
                        color
                      </option>
                      <option
                        value="conviction record"
                        id="convictionRecord"
                        selected={saySelection === "conviction record"}
                      >
                        conviction record
                      </option>
                      <option
                        value="creed"
                        id="creed"
                        selected={saySelection === "creed"}
                      >
                        creed
                      </option>
                      <option
                        value="employment"
                        id="employment"
                        selected={saySelection === "employment"}
                      >
                        employment
                      </option>
                      <option
                        value="national origin"
                        id="nationalOrigin"
                        selected={saySelection === "national origin"}
                      >
                        national origin
                      </option>
                      <option
                        value="race"
                        id="race"
                        selected={saySelection === "race"}
                      >
                        race
                      </option>
                      <option
                        value="religion"
                        id="religion"
                        selected={saySelection === "religion"}
                      >
                        religion
                      </option>
                      <option
                        value="weight"
                        id="weight"
                        selected={saySelection === "weight"}
                      >
                        weight
                      </option>
                      <option value=""></option>
                    </optgroup>

                    <optgroup label="WELLBEING" className="optgroup2">
                      <option
                        value="disability"
                        id="disability"
                        selected={saySelection === "disability"}
                      >
                        disability
                      </option>
                      <option
                        value="domestic violence victim status"
                        id="domesticViolenceVictimStatus"
                        selected={
                          saySelection === "domestic violence victim status"
                        }
                      >
                        domestic violence victim status
                      </option>
                      <option
                        value="employment status"
                        id="employmentStatus"
                        selected={saySelection === "employment status"}
                      >
                        employment status
                      </option>
                      <option
                        value="gender identity"
                        id="genderIdentity"
                        selected={saySelection === "gender identity"}
                      >
                        gender identity
                      </option>
                      <option
                        value="gender expression"
                        id="genderExpression"
                        selected={saySelection === "gender expression"}
                      >
                        gender expression
                      </option>
                      <option
                        value="familial status"
                        id="familialStatus"
                        selected={saySelection === "familial status"}
                      >
                        familial status
                      </option>
                      <option
                        value="marital status"
                        id="maritalStatus"
                        selected={saySelection === "marital status"}
                      >
                        marital status
                      </option>
                      <option
                        value="mental health status"
                        id="mentalHealthStatus"
                        selected={saySelection === "mental health status"}
                      >
                        mental health status
                      </option>
                      <option
                        value="predisposing genetic characteristics"
                        id="predisposingGeneticCharacteristics"
                        selected={
                          saySelection ===
                          "predisposing genetic characteristics"
                        }
                      >
                        predisposing genetic characteristics
                      </option>
                      <option
                        value="sex"
                        id="sex"
                        selected={saySelection === "sex"}
                      >
                        sex
                      </option>
                      <option
                        value="sexual orientation"
                        id="sexualOrientation"
                        selected={saySelection === "sexual orientation"}
                      >
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
