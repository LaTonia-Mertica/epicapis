import React from "react";
import ReactDOM from "react-dom";
import styles from "./App.css";
import { Route } from "@mui/icons-material";

import epicapisLogo from "./images/epicapisLogo.png";
import agify from "./images/agify.png";
import chuck from "./images/chuck.png";
import cocktails from "./images/cocktails.png";
import foaas from "./images/foaas.png";
import marvel from "./images/marvel.jpg";
import owen from "./images/owen.png";
import pokemon from "./images/pokemon.png";
import ronSwanson from "./images/ronSwanson.png";
import starWars from "./images/starWars.png";
import trump from "./images/trump.png";

function App() {
  return (
    <main>
      <a href="#">
        <img
          src={epicapisLogo}
          alt="Epic Apis Logo"
          width="500px"
          height="500px"
          id="epicapislogo"
        ></img>
      </a>
      <nav>
        <ul className="unorderedList">
          <li>
            <a href="https://trello.com/b/YLTdkWTR/epicapis">
              <span className="listWordFont listWordColor">trello</span> board
            </a>
          </li>
          <li>
            <a href="https://github.com/LaTonia-Mertica/epicapis">
              <span className="listWordColor">repo</span>sitory
            </a>
          </li>
          <li>
            <a href="https://www.latoniamertica.dev/">
              <span className="listWordFont listWordColor">dot dev</span> site
            </a>
          </li>
        </ul>
      </nav>

      <section className="imgSection row">
        <section className="col-xs">
          <img
            src={owen}
            alt="Owen Wilson Logo"
            width="258px"
            height="259px"
            className="logo owen box"
          ></img>
          <img
            src={chuck}
            alt="Chuck Norris Logo"
            width="183px"
            height="162px"
            className="logo chuck box"
          ></img>
        </section>
      </section>

      <section className="imgSection row">
        <section className="col-xs">
          <img
            src={pokemon}
            alt="Pokemon Logo"
            width="266px"
            height="109px"
            className="logo pokemon box"
          ></img>
          <img
            src={starWars}
            alt="Star Wars Logo"
            width="247px"
            height="128px"
            className="logo starwars box"
          ></img>
        </section>
      </section>

      <section className="imgSection row">
        <section className="col-xs">
          <img
            src={cocktails}
            alt="Cocktails Logo"
            width="500px"
            height="500px"
            className="logo cocktails box"
          ></img>
          <img
            src={foaas}
            alt="Fuck Off As A Service Logo"
            width="500px"
            height="500px"
            className="logo foaas box"
          ></img>
        </section>
      </section>

      <section className="imgSection row">
        <section className="col-xs">
          <img
            src={agify}
            alt="Agify Logo"
            width="500px"
            height="500px"
            className="logo agify box"
          ></img>
          <img
            src={trump}
            alt="Donald Trump Logo"
            width="188px"
            height="191px"
            className="logo trump box"
          ></img>
        </section>
      </section>

      <section className="imgSection row">
        <section className="col-xs">
          <img
            src={ronSwanson}
            alt="Ron Swanson Logo"
            width="286px"
            height="160px"
            className="logo swanson box"
          ></img>
          <img
            src={marvel}
            alt="Marvel Comics Logo"
            width="140px"
            height="206px"
            className="logo marvel box"
          ></img>
        </section>
      </section>

      <footer className="copyrightText">
        &copy;
        <a href="https://www.latoniamertica.dev/" className="listWordColor">
          La'Tonia Mertica
        </a>
      </footer>
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
