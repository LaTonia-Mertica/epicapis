import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Funnyest.scss";
import { style } from "../mui.js";

const Funnyest = ({ openModal, onClose }) => {
  const [funnyestSelections, setFunnyestSelections] = useState();
  // part of wiring for email api
  // TODO: need spread operator to manage multiple selections?
  // TODO: need array or other storage for multiple selections?
  const submit = () => {
    console.log(funnyestSelections);
    if (funnyestSelections) {
      window.localStorage.setItem(
        "funnyestSelections",
        JSON.stringify(funnyestSelections)
      );
    }
  };

  return (
    <main>
      <Modal
        open={openModal === "Funnyest"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="funnyestCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <fieldset
              className="funnyestFieldset"
              // TODO: determine viability of name with array (funnyest[])
              // name="funnyest[]"
              name="funnyest"
              id="funnyest"
              value="funnyest"
              onChange={(event) => {
                setFunnyestSelections(event.target.value);
              }}
            >
              <span>
                <p className="funnyestPara para1">
                  <input
                    type="checkbox"
                    // name="funnyest[]"
                    name="anthonyanderson"
                    id="anthonyanderson"
                    value="Anthony Anderson"
                    // checked={funnyestSelections === "Anthony Anderson"}
                  />
                  <label
                    htmlFor="anthonyanderson"
                    title="image property of variety.com"
                  >
                    Anthony Anderson
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    // name="funnyest[]"
                    name="jamiefoxx"
                    id="jamiefoxx"
                    value="Jamie Foxx"
                    // checked={funnyestSelections === "Jamie Foxx"}
                  />
                  <label htmlFor="jamiefoxx" title="image property of aurn.com">
                    Jamie Foxx
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    // name="funnyest[]"
                    name="whoopigoldberg"
                    id="whoopigoldberg"
                    value="Whoopi Goldberg"
                    // checked={funnyestSelections === "Whoopi Goldberg"}
                  />
                  <label
                    htmlFor="whoopigoldberg"
                    title="image property of celebtattler.com"
                  >
                    Whoopi Goldberg
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    // name="funnyest[]"
                    name="orlandojones"
                    id="orlandojones"
                    value="Orlando Jones"
                    // checked={funnyestSelections === "Orlando Jones"}
                  />
                  <label
                    htmlFor="orlandojones"
                    title="image property of app.blacklivingknowledge.com"
                  >
                    Orlando Jones
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    // name="funnyest[]"
                    name="berniemac"
                    id="berniemac"
                    value="Bernie Mac"
                    // checked={funnyestSelections === "Bernie Mac"}
                  />
                  <label
                    htmlFor="berniemac"
                    title="image property of thecinemaholic.com"
                  >
                    Bernie Mac
                  </label>
                  <br />
                </p>

                <p className="funnyestPara para2">
                  <input
                    type="checkbox"
                    // name="funnyest[]"
                    name="davidmann"
                    id="davidmann"
                    value="David Mann"
                    // checked={funnyestSelections === "David Mann"}
                  />
                  <label
                    htmlFor="davidmann"
                    title="image property of hellobeautiful.com"
                  >
                    David Mann
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    // name="funnyest[]"
                    name="eddiemurphy]"
                    id="eddiemurphy"
                    value="Eddie Murphy"
                    // checked={funnyestSelections === "Eddie Murphy"}
                  />
                  <label
                    htmlFor="eddiemurphy"
                    title="image property of oseiagyemang.com"
                  >
                    Eddie Murphy
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    // name="funnyest[]"
                    name="lawandapage"
                    id="lawandapage"
                    value="LaWanda Page"
                    // checked={funnyestSelections === "LaWanda Page"}
                  />
                  <label
                    htmlFor="lawandapage"
                    title="image property of celebritynetworths.org"
                  >
                    LaWanda Page
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    // name="funnyest[]"
                    name="wandasykes"
                    id="wandasykes"
                    value="Wanda Sykes"
                    // checked={funnyestSelections === "Wanda Sykes"}
                  />
                  <label
                    htmlFor="wandasykes"
                    title="image property of pridesource.com"
                  >
                    Wanda Sykes
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    // name="funnyest[]"
                    name="roberttownsend"
                    id="roberttownsend"
                    value="Robert Townsend"
                    // checked={funnyestSelections === "Robert Townsend"}
                  />
                  <label
                    htmlFor="roberttownsend"
                    title="image property of kut.org"
                  >
                    Robert Townsend
                  </label>
                  <br />
                </p>
              </span>
            </fieldset>

            <Button type="submit" className="submitBtn" onClick={submit}>
              submit
            </Button>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default Funnyest;

// IMAGE CREDITS

// anthony anderson - variety.com
// jamie foxx - aurn.com
// whoopi goldberg - celebtattler.com
// orlando jones - app.blacklivingknowledge.com
// bernie mac - thecinemaholic.com

// david mann - hellobeautiful.com
// eddie murphy - oseiagyemang.com
// lawanda page - celebritynetworths.org
// wanda sykes - pridesource.com
// robert townsend - kut.org
