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
    if (prettiestSelection) {
      window.localStorage.setItem(
        "prettiestSelection",
        JSON.stringify(prettiestSelection)
      );
    }
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
                <section>
                  <label htmlFor="highball">
                    <WhatshotIcon className="whatshot" />
                    <input
                      type="radio"
                      name="prettiest"
                      value="High Ball (anything 'dark & stormy')"
                      selected={
                        prettiestSelection ===
                        "High Ball (anything 'dark & stormy')"
                      }
                      className="customIcons"
                    />
                    High Ball
                  </label>
                  <br />
                  <span className="pretties">
                    <span className="subTitleLeadIn">anything&nbsp;</span>
                    <i>dark & stormy</i>
                  </span>
                </section>
                <br />

                <section>
                  <label htmlFor="coupe">
                    <WhatshotIcon className="whatshot" />
                    <input
                      type="radio"
                      name="prettiest"
                      value="Coupe (necessarily 'boulevardier')"
                      selected={
                        prettiestSelection ===
                        "Coupe (necessarily 'boulevardier')"
                      }
                      className="customIcons"
                    />
                    Coupe
                  </label>
                  <br />
                  <span className="pretties">
                    <span className="subTitleLeadIn">necessarily&nbsp;</span>
                    <i>boulevardier</i>
                  </span>
                </section>
                <br />

                <section>
                  <label htmlFor="zombie">
                    <WhatshotIcon className="whatshot" />
                    <input
                      type="radio"
                      name="prettiest"
                      value="Zombie (think 'tequila sunrise')"
                      selected={
                        prettiestSelection ===
                        "Zombie (think 'tequila sunrise')"
                      }
                      className="customIcons"
                    />
                    Zombie
                  </label>
                  <br />
                  <span className="pretties">
                    <span className="subTitleLeadIn">think&nbsp;</span>
                    <i>tequila sunrise</i>
                  </span>
                </section>
                <br />

                <section>
                  <label htmlFor="rocks">
                    <WhatshotIcon className="whatshot" />
                    <input
                      type="radio"
                      name="prettiest"
                      value="Rocks (essentially 'old fashioned')"
                      selected={
                        prettiestSelection ===
                        "Rocks (essentially 'old fashioned')"
                      }
                      className="customIcons"
                    />
                    Rocks
                  </label>
                  <br />
                  <span className="pretties">
                    <span className="subTitleLeadIn">essentially&nbsp;</span>
                    <i>old fashioned</i>
                  </span>
                </section>
                <br />

                <section>
                  <label htmlFor="hurricane">
                    <WhatshotIcon className="whatshot" />
                    <input
                      type="radio"
                      name="prettiest"
                      value="Hurricane (akin 'singapore sling')"
                      selected={
                        prettiestSelection ===
                        "Hurricane (akin 'singapore sling')"
                      }
                      className="customIcons"
                    />
                    Hurricane
                  </label>
                  <br />
                  <span className="pretties">
                    <span className="subTitleLeadIn">akin&nbsp;</span>
                    <i>singapore sling</i>
                  </span>
                </section>
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
