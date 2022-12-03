import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import WhatshotIcon from "@mui/icons-material/Whatshot";

import "./Prettiest.scss";
import { style } from "../mui.js";

import lowball from "./images/lowball.gif";
import manhattan from "./images/manhattan.gif";
import martini from "./images/martini.gif";
import mimosa from "./images/mimosa.gif";
import tomcollins from "./images/tomcollins.gif";

const Prettiest = ({ openModal, onClose }) => {
  const [prettiestSelection, setPrettiestSelection] = useState();

  const submit = () => {
    console.log(prettiestSelection);
    window.localStorage.setItem(
      "prettiestSelection",
      JSON.stringify(prettiestSelection)
    );
  };

  return (
    <main>
      <Modal
        open={openModal === "Prettiest"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="prettiestCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div className="radioFieldsetDiv">
            <fieldset
              className="prettiestFieldset"
              onChange={(event) => {
                setPrettiestSelection(event.target.value);
              }}
            >
              <p className="prettiestPara">
                <input
                  type="radio"
                  name="prettiest"
                  value="High Ball (anything 'dark & stormy')"
                  selected={
                    prettiestSelection ===
                    "High Ball (anything 'dark & stormy')"
                  }
                />
                <WhatshotIcon className="whatshot" />
                <label htmlFor="highball">
                  High Ball
                  <br />
                  <span className="pretties">
                    <span className="subTitleLeadIn">anything&nbsp;</span>
                    <i>dark & stormy</i>
                  </span>
                </label>
                <br />

                <input
                  type="radio"
                  name="prettiest"
                  value="Coupe (necessarily 'boulevardier')"
                  selected={
                    prettiestSelection === "Coupe (necessarily 'boulevardier')"
                  }
                />
                <WhatshotIcon className="whatshot" />
                <label htmlFor="coupe">
                  Coupe
                  <br />
                  <span className="pretties">
                    <span className="subTitleLeadIn">necessarily&nbsp;</span>
                    <i>boulevardier</i>
                  </span>
                </label>
                <br />

                <input
                  type="radio"
                  name="prettiest"
                  value="Zombie (think 'tequila sunrise')"
                  selected={
                    prettiestSelection === "Zombie (think 'tequila sunrise')"
                  }
                />
                <WhatshotIcon className="whatshot" />
                <label htmlFor="zombie">
                  Zombie <br />
                  <span className="pretties">
                    <span className="subTitleLeadIn">think&nbsp;</span>
                    <i>tequila sunrise</i>
                  </span>
                </label>
                <br />

                <input
                  type="radio"
                  name="prettiest"
                  value="Rocks (essentially 'old fashioned')"
                  selected={
                    prettiestSelection === "Rocks (essentially 'old fashioned')"
                  }
                />
                <WhatshotIcon className="whatshot" />
                <label htmlFor="rocks">
                  Rocks <br />
                  <span className="pretties">
                    <span className="subTitleLeadIn">essentially&nbsp;</span>
                    <i>old fashioned</i>
                  </span>
                </label>
                <br />

                <input
                  type="radio"
                  name="prettiest"
                  value="Hurricane (akin 'singapore sling')"
                  selected={
                    prettiestSelection === "Hurricane (akin 'singapore sling')"
                  }
                />
                <WhatshotIcon className="whatshot" />
                <label htmlFor="hurricane">
                  Hurricane
                  <br />
                  <span className="pretties">
                    <span className="subTitleLeadIn">akin&nbsp;</span>
                    <i>singapore sling</i>
                  </span>
                </label>
                <br />
              </p>

              <p>
                <img
                  src={tomcollins}
                  alt="Alcoholic Drink"
                  width="67rem"
                  height="auto"
                />

                <img
                  src={manhattan}
                  alt="Alcoholic Drink"
                  width="67rem"
                  height="auto"
                />

                <img
                  src={lowball}
                  alt="Alcoholic Drink"
                  width="67rem"
                  height="auto"
                />

                <img
                  src={martini}
                  alt="Alcoholic Drink"
                  width="67rem"
                  height="auto"
                />

                <img
                  src={mimosa}
                  alt="Alcoholic Drink"
                  width="67rem"
                  height="auto"
                />
              </p>
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
export default Prettiest;
