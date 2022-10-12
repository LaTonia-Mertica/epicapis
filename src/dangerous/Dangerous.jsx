import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Dangerous.scss";
import { style } from "../mui.js";

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

const Dangerous = ({ openModal, onClose }) => {
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
              <img src={alienating} alt="" width="9%" height="auto" />
              <img src={boastful} alt="" width="9%" height="auto" />
              <img src={boring} alt="" width="9%" height="auto" />
              <img src={chaotic} alt="" width="9%" height="auto" />
              <img src={cluttered} alt="" width="9%" height="auto" />
              <img src={disfunctional} alt="" width="9%" height="auto" />
              <img src={limiting} alt="" width="9%" height="auto" />
            </section>

            <section>
              <img src={malicious} alt="" width="9%" height="auto" />
              <img src={misleading} alt="" width="9%" height="auto" />
              <img src={slow} alt="" width="9%" height="auto" />
              <img src={toonested} alt="" width="9%" height="auto" />
              <img src={uninspiring} alt="" width="9%" height="auto" />
              <img src={unrelatable} alt="" width="9%" height="auto" />
              <img src={unwieldy} alt="" width="9%" height="auto" />
            </section>
            <Button type="button" className="submitBtn">
              submit
            </Button>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default Dangerous;
