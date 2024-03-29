import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Funnyest.scss";
import { style } from "../mui.js";

const Funnyest = ({ openModal, onClose }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    for (const element of selectedItems) {
      if (element.checked) {
        selectedItems.push(element.name);
      }
    }

    window.localStorage.setItem(
      "funnyestSelections",
      JSON.stringify(selectedItems)
    );
    onClose(true);
  };

  useEffect(() => {
    if (openModal) {
      const storageString = window.localStorage.getItem("funnyestSelections");

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
        open={openModal === "Funnyest Ever"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="funnyestCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <form
              className="funnyestForm"
              name="funnyest"
              id="funnyest"
              value="funnyest"
              onSubmit={submit}
            >
              <span>
                <p className="funnyestPara para1">
                  <input
                    type="checkbox"
                    name="Jamie Foxx"
                    id="jamiefoxx"
                    value="Jamie Foxx"
                    checked={selectedItems.includes("Jamie Foxx")}
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
                  <label htmlFor="jamiefoxx" title="image property of aurn.com">
                    Jamie Foxx
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="Whoopi Goldberg"
                    id="whoopigoldberg"
                    value="Whoopi Goldberg"
                    checked={selectedItems.includes("Whoopi Goldberg")}
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
                    htmlFor="whoopigoldberg"
                    title="image property of celebtattler.com"
                  >
                    Whoopi Goldberg
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="Moms Mabley"
                    id="momsmabley"
                    value="Moms Mabley"
                    checked={selectedItems.includes("Moms Mabley")}
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
                    htmlFor="momsmabley"
                    title="image property of atlantablackstar.com"
                  >
                    Moms Mabley
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="Bernie Mac"
                    id="berniemac"
                    value="Bernie Mac"
                    checked={selectedItems.includes("Bernie Mac")}
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
                    htmlFor="berniemac"
                    title="image property of thecinemaholic.com"
                  >
                    Bernie Mac
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="David Mann"
                    id="davidmann"
                    value="David Mann"
                    checked={selectedItems.includes("David Mann")}
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
                    htmlFor="davidmann"
                    title="image property of hellobeautiful.com"
                  >
                    David Mann
                  </label>
                  <br />
                </p>

                <p className="funnyestPara para2">
                  <input
                    type="checkbox"
                    name="Helen Martin"
                    id="helenmartin"
                    value="Helen Martin"
                    checked={selectedItems.includes("Helen Martin")}
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
                    htmlFor="helenmartin"
                    title="image property of etinside.com"
                  >
                    Helen Martin
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="Eddie Murphy"
                    id="eddiemurphy"
                    value="Eddie Murphy"
                    checked={selectedItems.includes("Eddie Murphy")}
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
                    htmlFor="eddiemurphy"
                    title="image property of oseiagyemang.com"
                  >
                    Eddie Murphy
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="LaWanda Page"
                    id="lawandapage"
                    value="LaWanda Page"
                    checked={selectedItems.includes("LaWanda Page")}
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
                    htmlFor="lawandapage"
                    title="image property of celebritynetworths.org"
                  >
                    LaWanda Page
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="Wanda Sykes"
                    id="wandasykes"
                    value="Wanda Sykes"
                    checked={selectedItems.includes("Wanda Sykes")}
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
                    htmlFor="wandasykes"
                    title="image property of pridesource.com"
                  >
                    Wanda Sykes
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="Robert Townsend"
                    id="roberttownsend"
                    value="Robert Townsend"
                    checked={selectedItems.includes("Robert Townsend")}
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
                    htmlFor="roberttownsend"
                    title="image property of kut.org"
                  >
                    Robert Townsend
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
export default Funnyest;

// IMAGE CREDITS

// jamie foxx - aurn.com
// whoopi goldberg - celebtattler.com
// moms mabley - atlantablackstar.com
// bernie mac - thecinemaholic.com
// david mann - hellobeautiful.com

// helen martin - etinside.com
// eddie murphy - oseiagyemang.com
// lawanda page - celebritynetworths.org
// wanda sykes - pridesource.com
// robert townsend - kut.org
