import React, { useState } from "react";

const Header = ({ epicMode, setEpicMode }) => {
  const [name, setName] = useState(localStorage.getItem("name") || "");

  const [enteredUserName, setEnteredUserName] = useState("");

  const formSubmitted = (event) => {
    event.preventDefault();
    localStorage.setItem("name", `Welcome, ${enteredUserName}`);
    setName(`Welcome, ${enteredUserName}`);
  };

  const clearName = () => {
    setName("");
    localStorage.removeItem("name");
  };

  const toggleEpicMode = () => {
    // const newMode = epicMode === "true" ? "false" : "true";
    // setEpicMode(newMode);
    // localStorage.setItem("epicMode", newMode);
    setEpicMode(!epicMode);
    localStorage.setItem("epicMode", JSON.stringify(!epicMode));
  };

  return (
    <header>
      <button onClick={toggleEpicMode} className="epicModeBtn">
        EPIC MODE
      </button>
      <h1 className="epicApisH1">{name}</h1>
      <form id="greetForm" onSubmit={formSubmitted}>
        <div className="store">
          <label htmlFor="enterusername"></label>
          {name ? (
            <div className="delete">
              <label
                htmlFor="deleteusername"
                onClick={clearName}
                id="deleteUserName"
              >
                do not store name
              </label>
              <input type="reset" id="deleteUserName" value="" />
            </div>
          ) : (
            <>
              <input
                value={enteredUserName}
                onChange={(event) => {
                  setEnteredUserName(event.target.value);
                }}
                id="enterUserName"
                type="text"
                placeholder="enter name"
                autoComplete="off"
                required
              />
              <input id="submitUserName" type="submit" value="submit" />
            </>
          )}
        </div>
      </form>
    </header>
  );
};

export default Header;
