import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Funnyest.scss";
import { style } from "../mui.js";

const Funnyest = ({ openModal, onClose, funnyest, setFunnyest }) => {
  const submit = () => {
    console.log(funnyest);
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
              name="funnyest"
              id="funnyest"
              value={funnyest}
              onChange={(event) => {
                setFunnyest(event.target.value);
              }}
            >
              <span>
                <p className="funnyestPara para1">
                  <input
                    type="checkbox"
                    name="funnyest"
                    id="anthonyanderson"
                    value="anthonyanderson"
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
                    name="funnyest"
                    id="jamiefoxx"
                    value="jamiefoxx"
                  />
                  <label htmlFor="jamiefoxx" title="image property of aurn.com">
                    Jamie Foxx
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="funnyest"
                    id="whoopigoldberg"
                    value="whoopigoldberg"
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
                    name="funnyest"
                    id="orlandojones"
                    value="orlandojones"
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
                    name="funnyest"
                    id="berniemac"
                    value="berniemac"
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
                    name="funnyest"
                    id="davidmann"
                    value="davidmann"
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
                    name="funnyest"
                    id="eddiemurphy"
                    value="eddiemurphy"
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
                    name="funnyest"
                    id="lawandapage"
                    value="lawandapage"
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
                    name="funnyest"
                    id="wandasykes"
                    value="wandasykes"
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
                    name="funnyest"
                    id="roberttownsend"
                    value="roberttownsend"
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
