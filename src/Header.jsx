import React, { useState } from "react";

const Header = ({ epicMode, setEpicMode }) => {
  const [name, setName] = useState(localStorage.getItem("name") || "");

  const [enteredUserName, setEnteredUserName] = useState("");

  const formSubmitted = (evt) => {
    evt.preventDefault();
    localStorage.setItem("name", `Welcome, ${enteredUserName}`);
    setName(`Welcome, ${enteredUserName}`);
  };

  const clearName = () => {
    setName("");
    localStorage.removeItem("name");
  };

  const toggleEpicMode = () => {
    const newMode = epicMode === "true" ? "false" : "true";
    setEpicMode(newMode);
    localStorage.setItem("epicMode", newMode);
  };

  return (
    <header>
      <button onClick={toggleEpicMode} class="epicModeBtn">
        EPIC MODE
      </button>

      <div>
        <p class="custom-greeting"></p>

        <div class="visitCountDiv">visit count</div>
        <div class="visit-counter"></div>
        <button type="reset" id="reset">
          reset
        </button>
      </div>

      <h1 class="epicApisH1">{name}</h1>
      <form id="greetForm" onSubmit={formSubmitted}>
        <div class="store">
          <label for="enterusername"></label>
          {name ? (
            <div class="delete">
              <label for="deleteusername" onClick={clearName}>
                do not store name
              </label>
              <input type="reset" id="deleteUserName" value="" />
            </div>
          ) : (
            <>
              <input
                value={enteredUserName}
                onChange={(evt) => {
                  setEnteredUserName(evt.target.value);
                }}
                id="enterUserName"
                type="text"
                placeholder="enter name"
                autocomplete="on"
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