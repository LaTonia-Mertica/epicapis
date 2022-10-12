import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Greatest.scss";
import { style } from "../mui.js";

const Greatest = ({ openModal, onClose }) => {
  return (
    <main>
      <Modal
        open={openModal === "Greatest"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="greatestCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <fieldset className="greatestFieldset">
              <span>
                <p className="greatestPara para1">
                  <input
                    type="checkbox"
                    name="greatest"
                    id="theprincessbride"
                    value="theprincessbride"
                  />
                  <label htmlFor="theprincessbride">The Princess Bride</label>
                  <br />

                  <input
                    type="checkbox"
                    name="greatest"
                    id="aliceinwonderland"
                    value="aliceinwonderland"
                  />
                  <label htmlFor="aliceinwonderland">Alice in Wonderland</label>
                  <br />

                  <input
                    type="checkbox"
                    name="greatest"
                    id="legend"
                    value="legend"
                  />
                  <label htmlFor="legend">Legend</label>
                  <br />

                  <input
                    type="checkbox"
                    name="greatest"
                    id="panslabyrinth"
                    value="panslabyrinth"
                  />
                  <label htmlFor="panslabyrinth">Pan's Labyrinth</label>
                  <br />

                  <input
                    type="checkbox"
                    name="greatest"
                    id="theneverendingstory"
                    value="theneverendingstory"
                  />
                  <label htmlFor="theneverendingstory">
                    The Neverending Story
                  </label>
                  <br />
                </p>

                <p className="greatestPara para2">
                  <input
                    type="checkbox"
                    name="greatest"
                    id="chittychittybangbang"
                    value="chittychittybangbang"
                  />
                  <label htmlFor="chittychittybangbang">
                    Chitty Chitty Bang Bang
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="greatest"
                    id="jasonandtheargonauts"
                    value="jasonandtheargonauts"
                  />
                  <label htmlFor="jasonandtheargonauts">
                    Jason & The Argonauts
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="greatest"
                    id="thewiz"
                    value="thewiz"
                  />
                  <label htmlFor="thewiz">The Wiz</label>
                  <br />

                  <input
                    type="checkbox"
                    name="greatest"
                    id="thedarkcrystal"
                    value="thedarkcrystal"
                  />
                  <label htmlFor="thedarkcrystal">The Dark Crystal</label>
                  <br />

                  <input
                    type="checkbox"
                    name="greatest"
                    id="whoframedrogerrabbit"
                    value="whoframedrogerrabbit"
                  />
                  <label htmlFor="whoframedrogerrabbit">
                    Who Framed Roger Rabbit
                  </label>
                  <br />
                </p>
              </span>
            </fieldset>
            <Button type="submit" className="submitBtn">
              submit
            </Button>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default Greatest;
