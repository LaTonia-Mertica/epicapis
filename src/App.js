import React, { useState } from "react";
import ReactDOM from "react-dom";

// styles import necessary for jsx and scss files
// eslint-disable-next-line
import styles from "./App.scss";
import Masonry from "react-masonry-css";
import Button from "@mui/material/Button";
// route import necessary for jsx and scss files
// eslint-disable-next-line
import { Route } from "@mui/icons-material";

import Header from "./Header";
import epicapisLogo from "./images/epicapisLogo.png";
import epicapisposter from "./images/epicapisposter.pdf";

import agify from "./images/agify.png";
import chuck from "./images/chuck.png";
import cocktails from "./images/cocktails.png";
import foaas from "./images/foaas.png";
import adultadvisory from "./images/adultadvisory.png";
import effoffentry from "./images/effoffentry.png";
import ohmy from "./images/ohmy.png";
import saywhatwhat from "./images/saywhatwhat.png";
import understood from "./images/understood.png";
import wow from "./images/wow.png";
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
import Funnyest from "./funnyest/Funnyest";
import ChuckNorris from "./chuck norris/ChuckNorris";
import Badassest from "./badassest/Badassest";
import Pokemon from "./pokemon/Pokemon";
import Greatest from "./greatest/Greatest";
import StarWars from "./star wars/StarWars";
import Grittiest from "./grittiest/Grittiest";
import Cocktails from "./cocktails/Cocktails";
import Prettiest from "./prettiest/Prettiest";
import DonaldTrump from "./donald trump/DonaldTrump";
import Say from "./say/Say";
import Agify from "./agify/Agify";
import Best from "./best/Best";
import FOAAS from "./foaas/FOAAS";
import Last from "./last/Last";
import RonSwanson from "./ron swanson/RonSwanson";
import Rampantest from "./rampantest/Rampantest";
import Marvel from "./marvel/Marvel";
import Sexiest from "./sexiest/Sexiest";

import Epic from "./epic/Epic";
import Beautiful from "./beautiful/Beautiful";
import Api from "./api/Api";
import Dangerous from "./dangerous/Dangerous";

const foaasImgs = [
  foaas,
  adultadvisory,
  effoffentry,
  ohmy,
  saywhatwhat,
  understood,
  wow,
];
const getRandomFoaasImg = Math.floor(Math.random() * foaasImgs.length);
let randomFoaasImg = foaasImgs[getRandomFoaasImg];

const App = () => {
  const [openModal, setOpenModal] = useState();

  const closeModal = () => {
    setOpenModal(false);
  };
  const [epicMode, setEpicMode] = useState(
    localStorage.getItem("epicMode") || "false"
  );

  const [count, setCount] = useState(localStorage.getItem("count") || 1);
  const addOneToCount = () => {
    // eslint-disable-next-line
    let visitCount = Number(localStorage.getItem("count")) || 1;
    localStorage.setItem("count", Number(count) + 1);
  };
  const deleteCount = () => {
    setCount(1);
    localStorage.removeItem("count");
  };

  const state = {
    email: {
      to: "",
      from: "",
      subject: "",
      html: "",
    },
  };

  const sendEmail = (event) => {
    event.preventDefault();
    const { email } = this.state;
    fetch(
      `http://localhost:3001/send-email?to-${email.to}&from-&${email.from}&subject-${email.subject}&html-${email.html}`
    ).catch((error) => console.log(error));
  };
  // arrange elements for email
  // const [funnyestSelection, setFunnyestSelection] = useState("");

  return (
    <main
      className={epicMode === "true" ? "epic-mode" : ""}
      onLoad={addOneToCount}
    >
      <div className="visitCountDiv">visit count</div>
      <p className="visitCountPara">{count}</p>
      <button type="reset" id="reset" onClick={deleteCount}>
        reset
      </button>

      <div className="logoAndNavDiv">
        <Header epicMode={epicMode} setEpicMode={setEpicMode} />
        {/* eslint-disable-next-line */}
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
              <a
                href="https://trello.com/b/YLTdkWTR/epicapis"
                target="_blank"
                rel="noreferrer"
              >
                <span className="listWordFont listWordColor">trello</span> board
              </a>
            </li>
            <li>
              <a
                href="https://github.com/LaTonia-Mertica/epicapis"
                target="_blank"
                rel="noreferrer"
              >
                <span className="listWordColor repoText">repo</span> sitory
              </a>
            </li>
            <li className="dotDevSiteText">
              <a
                href="https://www.latoniamertica.dev/"
                target="_blank"
                rel="noreferrer"
              >
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
                rel="noreferrer"
              >
                EPIC<strong className="apisOfEpicapis">APIS</strong>
              </a>
              <a
                href="https://www.latoniamertica.dev/"
                className="myName listWordColor"
                target="_blank"
                rel="noreferrer"
              >
                La'Tonia Mertica
              </a>
            </section>
          </ul>
        </nav>
      </div>
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
            onClick={() => {
              setOpenModal("Funnyest");
            }}
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
            onClick={() => {
              setOpenModal("Badassest");
            }}
          ></img>

          <img
            src={pokemon}
            alt="Pokemon Logo"
            width="266px"
            height="109px"
            className="pokemon box"
            onClick={() => {
              setOpenModal("Pokemon");
            }}
          ></img>
          <img
            src={greatest}
            alt="Greatest Fantasy Img"
            width="500px"
            height="500px"
            className="greatest semanticFillerImg"
            onClick={() => {
              setOpenModal("Greatest");
            }}
          ></img>

          <img
            src={starWars}
            alt="Star Wars Logo"
            width="247px"
            height="128px"
            className="starwars box"
            onClick={() => {
              setOpenModal("StarWars");
            }}
          ></img>
          <img
            src={grittiest}
            alt="Grittiest Army Img"
            width="500px"
            height="500px"
            className="grittiest semanticFillerImg"
            onClick={() => {
              setOpenModal("Grittiest");
            }}
          ></img>

          <img
            src={cocktails}
            alt="Cocktails Logo"
            width="500px"
            height="500px"
            className="cocktails box"
            onClick={() => {
              setOpenModal("Cocktails");
            }}
          ></img>
          <img
            src={prettiest}
            alt="Prettiest Drink Img"
            width="500px"
            height="500px"
            className="prettiest semanticFillerImg"
            onClick={() => {
              setOpenModal("Prettiest");
            }}
          ></img>

          <img
            src={trump}
            alt="Donald Trump Logo"
            width="188px"
            height="191px"
            className="trump box"
            onClick={() => {
              setOpenModal("DonaldTrump");
            }}
          ></img>
          <img
            src={say}
            alt="Say This Neva Img"
            width="500px"
            height="500px"
            className="say semanticFillerImg"
            onClick={() => {
              setOpenModal("Say");
            }}
          ></img>

          <img
            src={agify}
            alt="Agify Logo"
            width="500px"
            height="500px"
            className="agify box"
            onClick={() => {
              setOpenModal("Agify");
            }}
          ></img>
          <img
            src={best}
            alt="Best Age To Be Img"
            width="500px"
            height="500px"
            className="best semanticFillerImg"
            onClick={() => {
              setOpenModal("Best");
            }}
          ></img>

          <img
            src={randomFoaasImg}
            alt="Fuck Off As A Service Logo"
            width="500px"
            height="500px"
            className="foaas box"
            onClick={() => {
              setOpenModal("FOAAS");
            }}
          ></img>
          <img
            src={last}
            alt="Last Thing Need Img"
            width="500px"
            height="500px"
            className="last semanticFillerImg"
            onClick={() => {
              setOpenModal("Last");
            }}
          ></img>

          <img
            src={ronSwanson}
            alt="Ron Swanson Logo"
            width="286px"
            height="160px"
            className="swanson box"
            onClick={() => {
              setOpenModal("RonSwanson");
            }}
          ></img>
          <img
            src={rampantest}
            alt="Rampantest Lip Wig Img"
            width="500px"
            height="500px"
            className="rampantest semanticFillerImg"
            onClick={() => {
              setOpenModal("Rampantest");
            }}
          ></img>

          <img
            src={marvel}
            alt="Marvel Comics Logo"
            width="140px"
            height="206px"
            className="marvel box"
            onClick={() => {
              setOpenModal("Marvel");
            }}
          ></img>
          <img
            src={sexiest}
            alt="Sexiest Alter Ego Img"
            width="500px"
            height="500px"
            className="sexiest semanticFillerImg"
            onClick={() => {
              setOpenModal("Sexiest");
            }}
          ></img>

          <img
            src={epic}
            alt="Epic Img"
            width="500px"
            height="500px"
            className="epic semanticFillerImg"
            onClick={() => {
              setOpenModal("Epic");
            }}
          ></img>
          <img
            src={beautiful}
            alt="Beautiful Img"
            width="500px"
            height="500px"
            className="beautiful semanticFillerImg"
            onClick={() => {
              setOpenModal("Beautiful");
            }}
          ></img>

          <img
            src={api}
            alt="Api Img"
            width="500px"
            height="500px"
            className="api semanticFillerImg"
            onClick={() => {
              setOpenModal("Api");
            }}
          ></img>
          <img
            src={dangerous}
            alt="Dangerous Img"
            width="500px"
            height="500px"
            className="dangerous semanticFillerImg"
            onClick={() => {
              setOpenModal("Dangerous");
            }}
          ></img>
        </div>
      </Masonry>
      <OwenWilson openModal={openModal} onClose={closeModal} />
      <Funnyest
        openModal={openModal}
        onClose={closeModal}
        // arrange elements for email
        // funnyest={funnyestSelection}
        // setFunnyest={setFunnyestSelection}
      />
      <ChuckNorris openModal={openModal} onClose={closeModal} />
      <Badassest openModal={openModal} onClose={closeModal} />
      <Pokemon openModal={openModal} onClose={closeModal} />
      <Greatest openModal={openModal} onClose={closeModal} />
      <StarWars openModal={openModal} onClose={closeModal} />
      <Grittiest openModal={openModal} onClose={closeModal} />
      <Cocktails openModal={openModal} onClose={closeModal} />
      <Prettiest openModal={openModal} onClose={closeModal} />
      <DonaldTrump openModal={openModal} onClose={closeModal} />
      <Say openModal={openModal} onClose={closeModal} />
      <Agify openModal={openModal} onClose={closeModal} />
      <Best openModal={openModal} onClose={closeModal} />
      <FOAAS openModal={openModal} onClose={closeModal} />
      <Last openModal={openModal} onClose={closeModal} />
      <RonSwanson openModal={openModal} onClose={closeModal} />
      <Rampantest openModal={openModal} onClose={closeModal} />
      <Marvel openModal={openModal} onClose={closeModal} />
      <Sexiest openModal={openModal} onClose={closeModal} />
      <Epic openModal={openModal} onClose={closeModal} />
      <Beautiful openModal={openModal} onClose={closeModal} />
      <Api openModal={openModal} onClose={closeModal} />
      <Dangerous openModal={openModal} onClose={closeModal} />
      <form className="selectionsForm">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter email address"
          autoComplete="off"
          className="selectionsInput"
          onChange={(event) => {
            sendEmail(event.target.value);
          }}
        />
        <Button
          type="submit"
          // onClick={sendEmail}
          onClick={() => {
            // arrange elements for email
            // console.log(funnyestSelection);
            fetch(`http://localhost:3001/sendEmail`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                // arrange elements for email
                to: state.email.to,
                from: state.email.from,
                subject: state.email.subject,
                html: state.email.html,
              }),
            });
          }}
          className="selectionsSubmitBtn"
        >
          email selections
        </Button>
      </form>

      <footer className="copyrightText">
        {/* &copy;
        <a
          href={epicapisposter}
          className="epicapisCopyrightText listWordColor"
          target="_blank"  rel="noreferrer"
        >
          EPIC<strong className="apisOfEpicapis">APIS</strong>
        </a>{" "}
        <a
          href="https://www.latoniamertica.dev/"
          className="listWordColor"
          target="_blank"  rel="noreferrer"
        >
          La'Tonia Mertica
        </a> */}
      </footer>
    </main>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
