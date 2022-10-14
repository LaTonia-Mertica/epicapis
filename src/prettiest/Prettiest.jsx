import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Prettiest.scss";
import { style } from "../mui.js";

import lowball from "./images/lowball.gif";
import manhattan from "./images/manhattan.gif";
import martini from "./images/martini.gif";
import mimosa from "./images/mimosa.gif";
import tomcollins from "./images/tomcollins.gif";

const Prettiest = ({ openModal, onClose }) => {
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
            <fieldset className="prettiestFieldset">
              <p className="prettiestPara">
                <input
                  type="radio"
                  name="prettiest"
                  id="highball"
                  value="highball"
                />
                <label htmlFor="highball">
                  High Ball
                  <br />
                  <span className="pretties">
                    <span className="subTitleLeadIn">anything&nbsp;</span>
                    <i>dark & stormy</i>
                  </span>
                </label>
                <br />

                <input type="radio" name="prettiest" id="coupe" value="coupe" />
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
                  id="zombie"
                  value="zombie"
                />
                <label htmlFor="zombie">
                  Zombie <br />
                  <span className="pretties">
                    <span className="subTitleLeadIn">think&nbsp;</span>
                    <i>tequila sunrise</i>
                  </span>
                </label>
                <br />

                <input type="radio" name="prettiest" id="rocks" value="rocks" />
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
                  id="hurricane"
                  value="hurricane"
                />
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
            <button type="submit" className="submitBtn">
              submit
            </button>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default Prettiest;
