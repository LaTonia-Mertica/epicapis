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

  useEffect(() => {
    if (openModal) {
      const storageString = window.localStorage.getItem("saySelection");

      if (storageString) {
        const { saySelection, phraseToShow } = JSON.parse(storageString);
        setSaySelection(saySelection);
        setPhraseToShow(phraseToShow);

        // phraseGenerator(setPhraseToShow, storageString);
      }
    }
  }, [openModal]);

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

          <form>
            <fieldset
              onChange={(event) => {
                setSaySelection(event.target.value);
              }}
            >
              <div className="sayPara">
                <label htmlFor="neversay"></label>
                <select
                  name="neversay"
                  id="neversay"
                  value={saySelection}
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
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      age
                    </option>

                    <option
                      value="arrest record"
                      id="arrestRecord"
                      defaultValue={saySelection === "arrest record"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      arrest record
                    </option>

                    <option
                      value="audible expression"
                      id="audibleExpression"
                      defaultValue={saySelection === "audible expression"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      audible expression
                    </option>

                    <option
                      value="color"
                      id="color"
                      defaultValue={saySelection === "color"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      color
                    </option>

                    <option
                      value="conviction record"
                      id="convictionRecord"
                      defaultValue={saySelection === "conviction record"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      conviction record
                    </option>

                    <option
                      value="creed"
                      id="creed"
                      defaultValue={saySelection === "creed"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      creed
                    </option>

                    <option
                      value="employment"
                      id="employment"
                      defaultValue={saySelection === "employment"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      employment
                    </option>

                    <option
                      value="national origin"
                      id="nationalOrigin"
                      defaultValue={saySelection === "national origin"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      national origin
                    </option>

                    <option
                      value="race"
                      id="race"
                      defaultValue={saySelection === "race"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      race
                    </option>

                    <option
                      value="religion"
                      id="religion"
                      defaultValue={saySelection === "religion"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      religion
                    </option>

                    <option
                      value="weight"
                      id="weight"
                      defaultValue={saySelection === "weight"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
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
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      disability
                    </option>

                    <option
                      value="domestic violence victim status"
                      id="domesticViolenceVictimStatus"
                      defaultValue={
                        saySelection === "domestic violence victim status"
                      }
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      domestic violence victim status
                    </option>

                    <option
                      value="employment status"
                      id="employmentStatus"
                      defaultValue={saySelection === "employment status"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      employment status
                    </option>

                    <option
                      value="gender identity"
                      id="genderIdentity"
                      defaultValue={saySelection === "gender identity"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      gender identity
                    </option>

                    <option
                      value="gender expression"
                      id="genderExpression"
                      defaultValue={saySelection === "gender expression"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      gender expression
                    </option>

                    <option
                      value="familial status"
                      id="familialStatus"
                      defaultValue={saySelection === "familial status"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      familial status
                    </option>

                    <option
                      value="marital status"
                      id="maritalStatus"
                      defaultValue={saySelection === "marital status"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      marital status
                    </option>

                    <option
                      value="mental health status"
                      id="mentalHealthStatus"
                      defaultValue={saySelection === "mental health status"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      mental health status
                    </option>

                    <option
                      value="predisposing genetic characteristics"
                      id="predisposingGeneticCharacteristics"
                      defaultValue={
                        saySelection === "predisposing genetic characteristics"
                      }
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      predisposing genetic characteristics
                    </option>

                    <option
                      value="sex"
                      id="sex"
                      defaultValue={saySelection === "sex"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      sex
                    </option>

                    <option
                      value="sexual orientation"
                      id="sexualOrientation"
                      defaultValue={saySelection === "sexual orientation"}
                      // onChange={(event) => {
                      //   setSaySelection(event.target.value);
                      // }}
                    >
                      sexual orientation
                    </option>
                  </optgroup>
                </select>

                <p className="phraseToShowText">{phraseToShow}</p>
              </div>
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
        </Box>
      </Modal>
    </main>
  );
};
export default Say;
