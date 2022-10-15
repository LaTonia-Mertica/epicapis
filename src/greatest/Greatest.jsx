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
                  <label
                    htmlFor="theprincessbride"
                    title="image property of geekynerfherder.blogspot.com"
                  >
                    The Princess Bride
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="greatest"
                    id="aliceinwonderland"
                    value="aliceinwonderland"
                  />
                  <label
                    htmlFor="aliceinwonderland"
                    title="image property of movieswatchfreeonline.com"
                  >
                    Alice in Wonderland
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="greatest"
                    id="legend"
                    value="legend"
                  />
                  <label
                    htmlFor="legend"
                    title="image property of amctheatres.com"
                  >
                    Legend
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="greatest"
                    id="panslabyrinth"
                    value="panslabyrinth"
                  />
                  <label
                    htmlFor="panslabyrinth"
                    title="image property of masqueradecrew.blogspot.com"
                  >
                    Pan's Labyrinth
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="greatest"
                    id="theneverendingstory"
                    value="theneverendingstory"
                  />
                  <label
                    htmlFor="theneverendingstory"
                    title="image property of art.alphacoders.com"
                  >
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
                  <label
                    htmlFor="chittychittybangbang"
                    title="image property of pardonmeforasking.blogspot.com"
                  >
                    Chitty Chitty Bang Bang
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="greatest"
                    id="jasonandtheargonauts"
                    value="jasonandtheargonauts"
                  />
                  <label
                    htmlFor="jasonandtheargonauts"
                    title="image property of alchetron.com"
                  >
                    Jason & The Argonauts
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="greatest"
                    id="thewiz"
                    value="thewiz"
                  />
                  <label
                    htmlFor="thewiz"
                    title="image property of themoviedb.org"
                  >
                    The Wiz
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="greatest"
                    id="thedarkcrystal"
                    value="thedarkcrystal"
                  />
                  <label
                    htmlFor="thedarkcrystal"
                    title="image property of dailydead.com"
                  >
                    The Dark Crystal
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="greatest"
                    id="whoframedrogerrabbit"
                    value="whoframedrogerrabbit"
                  />
                  <label
                    htmlFor="whoframedrogerrabbit"
                    title="image property of fanart.tv"
                  >
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

// IMAGE CREDITS

// the princess bride - geekynerfherder.blogspot.com
// alice in wonderland - movieswatchfreeonline.com
// legend - amctheatres.com
// pan's labyrinth - masqueradecrew.blogspot.com
// the neverending story - art.alphacoders.com

// chitty chitty bang bang - pardonmeforasking.blogspot.com
// jason and the argonauts - alchetron.com
// the wiz - themoviedb.org
// the dark crystal - dailydead.com
// who framed roger rabbit - fanart.tv
