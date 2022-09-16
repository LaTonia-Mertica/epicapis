import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Dangerous.scss";
import alienating from "./images/alienating.png";
import boastful from "./images/boastful.png";
import boring from "./images/boring.png";
import chaotic from "./images/chaotic.png";
import cluttered from "./images/cluttered.png";
import disfunctional from "./images/disfunctional.png";
import limiting from "./images/limiting.png";
import malicious from "./images/malicious.png";
import misleading from "./images/misleading.png";
import slow from "./images/slow.png";
import toonested from "./images/too-nested.png";
import uninspiring from "./images/uninspiring.png";
import unrelatable from "./images/unrelatable.png";
import unwieldy from "./images/unwieldy.png";

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

function Dangerous({ openModal, onClose }) {
  return (
    <main>
      <Modal
        open={openModal === "Dangerous"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="dangerousCard">
          <Button onClick={onClose}>&#x274C;</Button>
          <div>
            <section>
              <img src={alienating} alt="" width="13%" height="auto" />
              <img src={boastful} alt="" width="13%" height="auto" />
              <img src={boring} alt="" width="13%" height="auto" />
              <img src={chaotic} alt="" width="13%" height="auto" />
              <img src={cluttered} alt="" width="13%" height="auto" />
              <img src={disfunctional} alt="" width="13%" height="auto" />
              <img src={limiting} alt="" width="13%" height="auto" />
            </section>

            <section>
              <img src={malicious} alt="" width="13%" height="auto" />
              <img src={misleading} alt="" width="13%" height="auto" />
              <img src={slow} alt="" width="13%" height="auto" />
              <img src={toonested} alt="" width="13%" height="auto" />
              <img src={uninspiring} alt="" width="13%" height="auto" />
              <img src={unrelatable} alt="" width="13%" height="auto" />
              <img src={unwieldy} alt="" width="13%" height="auto" />
            </section>
            <Button type="button" className="submitBtn">
              submit
            </Button>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default Dangerous;
