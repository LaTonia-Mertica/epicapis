import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Greatest.scss";
import { style } from "../mui.js";

const Greatest = ({ openModal, onClose }) => {
  const submit = (event) => {
    event.preventDefault();
    let selectedGreatestFantasies = [];

    // this is an example of an uncontrolled input that uses the DOM to access (instead of state)
    // controlled input has a value and onChange
    // uncontrolled input is anything that does not have a value and onChange from which we get the value out of directly using the DOM

    for (const element of event.target.elements) {
      if (element.checked) {
        selectedGreatestFantasies.push(element.name);
      }
    }

    console.log(selectedGreatestFantasies);

    window.localStorage.setItem(
      "greatestSelections",
      JSON.stringify(selectedGreatestFantasies)
    );
  };

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
            <form
              className="greatestForm"
              name="greatest"
              id="greatest"
              value="greatest"
              onSubmit={submit}
            >
              <span>
                <p className="greatestPara para1">
                  <input
                    type="checkbox"
                    name="theprincessbride"
                    id="theprincessbride"
                    value="The Princess Bride"
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
                    name="aliceinwonderland"
                    id="aliceinwonderland"
                    value="Alice in Wonderland"
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
                    name="legend"
                    id="legend"
                    value="Legend"
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
                    name="panslabyrinth"
                    id="panslabyrinth"
                    value="Pan's Labyrinth"
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
                    name="theneverendingstory"
                    id="theneverendingstory"
                    value="The Neverending Story"
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
                    name="chittychittybangbang"
                    id="chittychittybangbang"
                    value="Chitty Chitty Bang Bang"
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
                    name="jasonandtheargonauts"
                    id="jasonandtheargonauts"
                    value="Jason & The Argonauts"
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
                    name="thewiz"
                    id="thewiz"
                    value="The Wiz"
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
                    name="thedarkcrystal"
                    id="thedarkcrystal"
                    value="The Dark Crystal"
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
                    name="whoframedrogerrabbit"
                    id="whoframedrogerrabbit"
                    value="Who Framed Roger Rabbit"
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
              <Button type="submit" className="submitBtn">
                submit
              </Button>
            </form>
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
