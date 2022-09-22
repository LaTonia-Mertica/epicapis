import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import "./Agify.scss";

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

  maxHeight: "90vh",
  overflow: "scroll",
};

function Agify({ openModal, onClose }) {
  const [name, setName] = useState("");
  const [ageByName, setAgeByName] = useState({
    age: "",
    name: "",
    count: "",
  });

  const getAgeMyName = async (event) => {
    event.preventDefault();

    const response = await fetch(`https://api.agify.io?name=${name}`);
    const data = await response.json();
    setAgeByName({
      age: data.age,
      name: data.name,
      count: data.count,
    });

    const error = () => {
      if (ageByName.age === null) {
        console.log("Apologies, no listing!");
      }
    };
  };

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
            &#x2327;
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
              Get Age by Name
            </Button>
          </form>

          <div>
            <h1>{ageByName.name}</h1>
            <p>{ageByName.age}</p>
            <p className="disclaimerPara">
              <span className="disclaimerSpan">the fine print:&emsp;</span>
              <span className="disclaimerParaText">
                agify documentation and/or marketing describes the api as a
                resource to get the a) age of a name and b) age of a person.
                while agify may be useful in "analytics, ad segmenting,
                demographic statistics etc." as stated in the documentation
                and/or marketing, search results may vary from expected
                outcomes.
              </span>
            </p>
          </div>
        </Box>
      </Modal>
    </main>
  );
}
export default Agify;
