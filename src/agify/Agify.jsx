import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Agify.scss";
import { style } from "../mui.js";

const Agify = ({ openModal, onClose }) => {
  const [name, setName] = useState("");
  const [ageByName, setAgeByName] = useState({
    age: "",
    name: "",
    count: "",
  });
  const [loading, setLoading] = useState(false);

  const getAgeMyName = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await fetch(
      `https://api.agify.io?name=${name.replace(/\W/g, "")}`
    );
    const data = await response.json();

    if (data.age === null) {
      setLoading(false);
      setAgeByName({
        name: (
          <h2 className="errorText">
            <span className="unfoundName">
              &#10075;&nbsp;
              {name}&nbsp;&#10076;
            </span>
            <br />
            <span className="noEntryText">no entry found</span>
            <br />
            please try again
          </h2>
        ),
        count: "",
      });
    } else {
      setAgeByName({
        age: data.age,
        name: name,
        count: data.count,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!openModal) {
      setName("");
      setAgeByName({
        age: "",
        name: "",
        count: "",
      });
    }
  }, [openModal]);

  return (
    <main>
      <Modal
        open={openModal === "Agify"}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="agifyCard">
          <button onClick={onClose} className="closeBtn">
            &#x2612;
          </button>
          <form onSubmit={getAgeMyName}>
            <input
              type="text"
              name="agify"
              id="agify"
              placeholder="enter name"
              autoComplete="off"
              value={name}
              onChange={(event) => {
                setName(event.target.value.toLowerCase());
              }}
            />
            <Button type="submit" onClick={getAgeMyName} className="searchBtn">
              {loading ? <>loading...</> : <>Get Age by Name</>}
            </Button>
          </form>
          <details>
            <summary
              className="disclaimerSummary animate"
              title="read the fine print"
            >
              read the fine print
            </summary>
            <p className="disclaimerPara">
              documentation and / or marketing describe agify as a resource to{" "}
              <b>get the age</b> of someone's <b>a) </b>
              <i>name</i> or <b>b) </b>
              <i>person</i>.
              <br />
              <br />
              while agify may be useful in "analytics, ad segmenting,
              demographic statistics etc." as stated in the documentation and /
              or marketing, <b>search results may vary</b> from expected
              outcomes.
            </p>
          </details>

          <div className="nameAgeDiv">
            <h1>{ageByName.name}</h1>
            <p className="agePara">{ageByName.age}</p>
            <p className="nameSearchCount">
              {ageByName.count < 1 ? (
                <></>
              ) : (
                <>search count:&nbsp;&nbsp;{ageByName.count}</>
              )}
            </p>
          </div>
        </Box>
      </Modal>
    </main>
  );
};
export default Agify;
