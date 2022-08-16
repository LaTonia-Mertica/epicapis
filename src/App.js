import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./App.scss";
import Masonry from "react-masonry-css";
import { Route } from "@mui/icons-material";

import epicapisLogo from "./images/epicapisLogo.png";
import epicapisposter from "./images/epicapisposter.pdf";

import agify from "./images/agify.png";
import chuck from "./images/chuck.png";
import cocktails from "./images/cocktails.png";
import foaas from "./images/foaas.png";
import marvel from "./images/marvel.png";
import owen from "./images/owen.png";
import pokemon from "./images/pokemon.png";
import ronSwanson from "./images/ronSwanson.png";
import starWars from "./images/starWars.png";
import trump from "./images/trump.png";
import epic from "./images/epic.png";
import api from "./images/api.png";

import badassest from "./images/badassest-on-tv.png";
import best from "./images/best-age-to-be.png";
import funnyest from "./images/funnyest-ever.png";
import greatest from "./images/greatest-fantasy.png";
import grittiest from "./images/grittiest-army.png";
import last from "./images/last-thing-need.png";
import prettiest from "./images/prettiest-drink.png";
import rampantest from "./images/rampantest-lip-wig.png";
import say from "./images/say-this-neva.png";
import sexiest from "./images/sexiest-alter-ego.png";
import beautiful from "./images/beautiful-code.png";
import dangerous from "./images/dangerous-code.png";

import OwenWilson from "./owen wilson/OwenWilson";
import ChuckNorris from "./chuck norris/ChuckNorris";

function App() {
  const [openModal, setOpenModal] = useState();
  const closeModal = () => {
    setOpenModal(false);
  };

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
        <ul>
          <section className="copyrightContent">
            &copy;
            <a
              href={epicapisposter}
              className="epicapisCopyrightText listWordColor"
              target="_blank"
            >
              EPIC<strong className="apisOfEpicapis">APIS</strong>
            </a>
            <a
              href="https://www.latoniamertica.dev/"
              className="myName listWordColor"
              target="_blank"
            >
              La'Tonia Mertica
            </a>
          </section>
        </ul>
      </nav>

      <Masonry
        breakpointCols={1}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div className="apiImgDiv">
          <img
            src={owen}
            alt="Owen Wilson Logo"
            width="258px"
            height="259px"
            className="owen box"
            onClick={() => {
              setOpenModal("OwenWilson");
            }}
          ></img>
          <img
            src={funnyest}
            alt="Funnyest Ever Img"
            width="500px"
            height="500px"
            className="funnyest semanticFillerImg"
          ></img>

          <img
            src={chuck}
            alt="Chuck Norris Logo"
            width="183px"
            height="162px"
            className="chuck box"
            onClick={() => {
              setOpenModal("ChuckNorris");
            }}
          ></img>
          <img
            src={badassest}
            alt="Badassest On Tv Img"
            width="500px"
            height="500px"
            className="badassest semanticFillerImg"
          ></img>

          <img
            src={pokemon}
            alt="Pokemon Logo"
            width="266px"
            height="109px"
            className="pokemon box"
          ></img>
          <img
            src={greatest}
            alt="Greatest Fantasy Img"
            width="500px"
            height="500px"
            className="greatest semanticFillerImg"
          ></img>

          <img
            src={starWars}
            alt="Star Wars Logo"
            width="247px"
            height="128px"
            className="starwars box"
          ></img>
          <img
            src={grittiest}
            alt="Grittiest Army Img"
            width="500px"
            height="500px"
            className="grittiest semanticFillerImg"
          ></img>

          <img
            src={cocktails}
            alt="Cocktails Logo"
            width="500px"
            height="500px"
            className="cocktails box"
          ></img>
          <img
            src={prettiest}
            alt="Prettiest Drink Img"
            width="500px"
            height="500px"
            className="prettiest semanticFillerImg"
          ></img>

          <img
            src={trump}
            alt="Donald Trump Logo"
            width="188px"
            height="191px"
            className="trump box"
          ></img>
          <img
            src={say}
            alt="Say This Neva Img"
            width="500px"
            height="500px"
            className="say semanticFillerImg"
          ></img>

          <img
            src={agify}
            alt="Agify Logo"
            width="500px"
            height="500px"
            className="agify box"
          ></img>
          <img
            src={best}
            alt="Best Age To Be Img"
            width="500px"
            height="500px"
            className="best semanticFillerImg"
          ></img>

          <img
            src={foaas}
            alt="Fuck Off As A Service Logo"
            width="500px"
            height="500px"
            className="foaas box"
          ></img>
          <img
            src={last}
            alt="Last Thing Need Img"
            width="500px"
            height="500px"
            className="last semanticFillerImg"
          ></img>

          <img
            src={ronSwanson}
            alt="Ron Swanson Logo"
            width="286px"
            height="160px"
            className="swanson box"
          ></img>
          <img
            src={rampantest}
            alt="Rampantest Lip Wig Img"
            width="500px"
            height="500px"
            className="rampantest semanticFillerImg"
          ></img>

          <img
            src={marvel}
            alt="Marvel Comics Logo"
            width="140px"
            height="206px"
            className="marvel box"
          ></img>
          <img
            src={sexiest}
            alt="Sexiest Alter Ego Img"
            width="500px"
            height="500px"
            className="sexiest semanticFillerImg"
          ></img>

          <img
            src={epic}
            alt="Epic Img"
            width="500px"
            height="500px"
            className="epic semanticFillerImg"
          ></img>
          <img
            src={beautiful}
            alt="Beautiful Img"
            width="500px"
            height="500px"
            className="beautiful semanticFillerImg"
          ></img>

          <img
            src={api}
            alt="Api Img"
            width="500px"
            height="500px"
            className="api semanticFillerImg"
          ></img>
          <img
            src={dangerous}
            alt="Dangerous Img"
            width="500px"
            height="500px"
            className="dangerous semanticFillerImg"
          ></img>
        </div>
      </Masonry>

      <OwenWilson openModal={openModal} onClose={closeModal} />
      <ChuckNorris openModal={openModal} onClose={closeModal} />

      <footer className="copyrightText">
        {/* &copy;
        <a
          href={epicapisposter}
          className="epicapisCopyrightText listWordColor"
          target="_blank"
        >
          EPIC<strong className="apisOfEpicapis">APIS</strong>
        </a>{" "}
        <a
          href="https://www.latoniamertica.dev/"
          className="listWordColor"
          target="_blank"
        >
          La'Tonia Mertica
        </a> */}
      </footer>
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
