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
      window.localStorage.setItem(
        "saySelection",
        JSON.stringify({ saySelection, phraseToShow })
      );
    }
    onClose(true);
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
                        defaultValue={saySelection === "age"}
                      >
                        age
                      </option>

                      <option
                        value="arrest record"
                        id="arrestRecord"
                        defaultValue={saySelection === "arrest record"}
                      >
                        arrest record
                      </option>

                      <option
                        value="audible expression"
                        id="audibleExpression"
                        defaultValue={saySelection === "audible expression"}
                      >
                        audible expression
                      </option>

                      <option
                        value="color"
                        id="color"
                        defaultValue={saySelection === "color"}
                      >
                        color
                      </option>

                      <option
                        value="conviction record"
                        id="convictionRecord"
                        defaultValue={saySelection === "conviction record"}
                      >
                        conviction record
                      </option>

                      <option
                        value="creed"
                        id="creed"
                        defaultValue={saySelection === "creed"}
                      >
                        creed
                      </option>

                      <option
                        value="employment"
                        id="employment"
                        defaultValue={saySelection === "employment"}
                      >
                        employment
                      </option>

                      <option
                        value="national origin"
                        id="nationalOrigin"
                        defaultValue={saySelection === "national origin"}
                      >
                        national origin
                      </option>

                      <option
                        value="race"
                        id="race"
                        defaultValue={saySelection === "race"}
                      >
                        race
                      </option>

                      <option
                        value="religion"
                        id="religion"
                        defaultValue={saySelection === "religion"}
                      >
                        religion
                      </option>

                      <option
                        value="weight"
                        id="weight"
                        defaultValue={saySelection === "weight"}
                      >
                        weight
                      </option>

                      <option value=""></option>
                    </optgroup>

                    <optgroup label="WELLBEING" className="optgroup2">
                      <option
                        value="disability"
                        id="disability"
                        defaultValue={saySelection === "disability"}
                      >
                        disability
                      </option>

                      <option
                        value="domestic violence victim status"
                        id="domesticViolenceVictimStatus"
                        defaultValue={
                          saySelection === "domestic violence victim status"
                        }
                      >
                        domestic violence victim status
                      </option>

                      <option
                        value="employment status"
                        id="employmentStatus"
                        defaultValue={saySelection === "employment status"}
                      >
                        employment status
                      </option>

                      <option
                        value="gender identity"
                        id="genderIdentity"
                        defaultValue={saySelection === "gender identity"}
                      >
                        gender identity
                      </option>

                      <option
                        value="gender expression"
                        id="genderExpression"
                        defaultValue={saySelection === "gender expression"}
                      >
                        gender expression
                      </option>

                      <option
                        value="familial status"
                        id="familialStatus"
                        defaultValue={saySelection === "familial status"}
                      >
                        familial status
                      </option>

                      <option
                        value="marital status"
                        id="maritalStatus"
                        defaultValue={saySelection === "marital status"}
                      >
                        marital status
                      </option>

                      <option
                        value="mental health status"
                        id="mentalHealthStatus"
                        defaultValue={saySelection === "mental health status"}
                      >
                        mental health status
                      </option>

                      <option
                        value="predisposing genetic characteristics"
                        id="predisposingGeneticCharacteristics"
                        defaultValue={
                          saySelection ===
                          "predisposing genetic characteristics"
                        }
                      >
                        predisposing genetic characteristics
                      </option>

                      <option
                        value="sex"
                        id="sex"
                        defaultValue={saySelection === "sex"}
                      >
                        sex
                      </option>

                      <option
                        value="sexual orientation"
                        id="sexualOrientation"
                        defaultValue={saySelection === "sexual orientation"}
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
