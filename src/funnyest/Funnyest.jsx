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
  };

  useEffect(() => {
    if (openModal) {
      const storageString = window.localStorage.getItem("funnyestSelections");

      if (storageString) {
        setSelectedItems(JSON.parse(storageString));
      }
    }
  }, [openModal]);

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
            <form
              className="funnyestForm"
              name="funnyest"
              id="funnyest"
              value="funnyest"
              onSubmit={submit}
              onChange={(event) => {
                if (event.target.checked) {
                  setSelectedItems([...selectedItems, event.target.name]);
                } else {
                  setSelectedItems(
                    selectedItems.filter((item) => item !== event.target.name)
                  );
                }
              }}
            >
              <span>
                <p className="funnyestPara para1">
                  <input
                    type="checkbox"
                    name="anthonyanderson"
                    id="anthonyanderson"
                    value="Anthony Anderson"
                    checked={selectedItems.includes("anthonyanderson")}
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
                    name="jamiefoxx"
                    id="jamiefoxx"
                    value="Jamie Foxx"
                    checked={selectedItems.includes("jamiefoxx")}
                  />
                  <label htmlFor="jamiefoxx" title="image property of aurn.com">
                    Jamie Foxx
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    name="whoopigoldberg"
                    id="whoopigoldberg"
                    value="Whoopi Goldberg"
                    checked={selectedItems.includes("whoopigoldberg")}
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
                    name="orlandojones"
                    id="orlandojones"
                    value="Orlando Jones"
                    checked={selectedItems.includes("orlandojones")}
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
                    name="berniemac"
                    id="berniemac"
                    value="Bernie Mac"
                    checked={selectedItems.includes("berniemac")}
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
                    name="davidmann"
                    id="davidmann"
                    value="David Mann"
                    checked={selectedItems.includes("davidmann")}
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
                    name="eddiemurphy"
                    id="eddiemurphy"
                    value="Eddie Murphy"
                    checked={selectedItems.includes("eddiemurphy")}
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
                    name="lawandapage"
                    id="lawandapage"
                    value="LaWanda Page"
                    checked={selectedItems.includes("lawandapage")}
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
                    name="wandasykes"
                    id="wandasykes"
                    value="Wanda Sykes"
                    checked={selectedItems.includes("wandasykes")}
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
                    name="roberttownsend"
                    id="roberttownsend"
                    value="Robert Townsend"
                    checked={selectedItems.includes("roberttownsend")}
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
