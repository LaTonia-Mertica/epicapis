import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Say.scss";

// mui
const style = {
  position: "absolute",
  outline: 0,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "87%",
  bgcolor: "background.transparent",
  border: ".05rem solid #fff",
  boxShadow: 23,
  p: 1.15,

  color: "#fff",
  fontFamily: "Arial, Helvetica, sans-serif",
};

function Say({ openModal, onClose }) {
  return (
    <main>
      <Modal
        open={openModal === "Say"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="sayCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <fieldset>
              <p className="sayPara">
                <label htmlFor="neversay">Never Say:&nbsp;&nbsp;</label>
                <input
                  type="text"
                  name="neversay"
                  id="neversay"
                  list="neversay-list"
                  placeholder="select your never say top pick"
                />
                <datalist id="neversay-list">
                  <option value="age">
                    humanity is dying because of people like you
                  </option>
                  <option value="arrest or conviction record">
                    what'd you do, you violent, should we be worried
                  </option>
                  <option value="color">
                    your skin is really dark, can I touch it
                  </option>
                  <option value="creed and/or religion">
                    they can hardly be called human being so barbaric
                  </option>
                  <option value="disability">
                    are you high-functioning enough for this
                  </option>
                  <option value="domestic violence victim status">
                    why didn't you just leave, you could've anytime
                  </option>
                  <option value="employment">
                    you wouldn't be a good cultural fit here
                  </option>
                  <option value="gender identity or expression">
                    on your birth certificate it tells you what you are
                  </option>
                  <option value="familial and/or marital status">
                    we need dependable folks, how can we know you are
                  </option>
                  <option value="national origin">
                    go back where you came from
                  </option>
                  <option value="predisposing genetic characteristics">
                    wow, you got a bad seed huh - bummer
                  </option>
                  <option value="race">
                    so well spoken - you are a credit to your people
                  </option>
                  <option value="sex">
                    now, of course, it is all your own fault
                  </option>
                  <option value="sexual orientation">
                    sure you're gay, you don't look homosexual
                  </option>
                </datalist>
              </p>
            </fieldset>
            <button type="button" className="submitBtn">
              submit
            </button>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default Say;
