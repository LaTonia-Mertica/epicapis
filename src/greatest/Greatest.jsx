import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Greatest.scss";
import { style } from "../mui.js";

const Greatest = ({ openModal, onClose }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    for (const element of selectedItems) {
      if (element.checked) {
        selectedItems.push(element.name);
      }
    }
    window.localStorage.setItem(
      "greatestSelections",
      JSON.stringify(selectedItems)
    );
    onClose(true);
  };

  useEffect(() => {
    if (openModal) {
      const storageString = window.localStorage.getItem("greatestSelections");

      if (storageString) {
        const selections = JSON.parse(storageString);

        if (selections) {
          setSelectedItems(selections);
        }
      }
    }
  }, [openModal]);

  return (
    <main>
      <Modal
        open={openModal === "Greatest Fantasy"}
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
                    name="The Princess Bride"
                    id="theprincessbride"
                    value="The Princess Bride"
                    checked={selectedItems.includes("The Princess Bride")}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setSelectedItems([...selectedItems, event.target.name]);
                      } else {
                        setSelectedItems(
                          selectedItems.filter(
                            (item) => item !== event.target.name
                          )
                        );
                      }
                    }}
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
                    name="Alice in Wonderland"
                    id="aliceinwonderland"
                    value="Alice in Wonderland"
                    checked={selectedItems.includes("Alice in Wonderland")}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setSelectedItems([...selectedItems, event.target.name]);
                      } else {
                        setSelectedItems(
                          selectedItems.filter(
                            (item) => item !== event.target.name
                          )
                        );
                      }
                    }}
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
                    name="Legend"
                    id="legend"
                    value="Legend"
                    checked={selectedItems.includes("Legend")}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setSelectedItems([...selectedItems, event.target.name]);
                      } else {
                        setSelectedItems(
                          selectedItems.filter(
                            (item) => item !== event.target.name
                          )
                        );
                      }
                    }}
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
                    name="Pan's Labyrinth"
                    id="panslabyrinth"
                    value="Pan's Labyrinth"
                    checked={selectedItems.includes("Pan's Labyrinth")}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setSelectedItems([...selectedItems, event.target.name]);
                      } else {
                        setSelectedItems(
                          selectedItems.filter(
                            (item) => item !== event.target.name
                          )
                        );
                      }
                    }}
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
                    name="The Neverending Story"
                    id="theneverendingstory"
                    value="The Neverending Story"
                    checked={selectedItems.includes("The Neverending Story")}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setSelectedItems([...selectedItems, event.target.name]);
                      } else {
                        setSelectedItems(
                          selectedItems.filter(
                            (item) => item !== event.target.name
                          )
                        );
                      }
                    }}
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
                    name="Chitty Chitty Bang Bang"
                    id="chittychittybangbang"
                    value="Chitty Chitty Bang Bang"
                    checked={selectedItems.includes("Chitty Chitty Bang Bang")}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setSelectedItems([...selectedItems, event.target.name]);
                      } else {
                        setSelectedItems(
                          selectedItems.filter(
                            (item) => item !== event.target.name
                          )
                        );
                      }
                    }}
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
                    name="Jason & The Argonauts"
                    id="jasonandtheargonauts"
                    value="Jason & The Argonauts"
                    checked={selectedItems.includes("Jason & The Argonauts")}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setSelectedItems([...selectedItems, event.target.name]);
                      } else {
                        setSelectedItems(
                          selectedItems.filter(
                            (item) => item !== event.target.name
                          )
                        );
                      }
                    }}
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
                    name="The Wiz"
                    id="thewiz"
                    value="The Wiz"
                    checked={selectedItems.includes("The Wiz")}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setSelectedItems([...selectedItems, event.target.name]);
                      } else {
                        setSelectedItems(
                          selectedItems.filter(
                            (item) => item !== event.target.name
                          )
                        );
                      }
                    }}
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
                    name="The Dark Crystal"
                    id="thedarkcrystal"
                    value="The Dark Crystal"
                    checked={selectedItems.includes("The Dark Crystal")}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setSelectedItems([...selectedItems, event.target.name]);
                      } else {
                        setSelectedItems(
                          selectedItems.filter(
                            (item) => item !== event.target.name
                          )
                        );
                      }
                    }}
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
                    name="Who Framed Roger Rabbit"
                    id="whoframedrogerrabbit"
                    value="Who Framed Roger Rabbit"
                    checked={selectedItems.includes("Who Framed Roger Rabbit")}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setSelectedItems([...selectedItems, event.target.name]);
                      } else {
                        setSelectedItems(
                          selectedItems.filter(
                            (item) => item !== event.target.name
                          )
                        );
                      }
                    }}
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
