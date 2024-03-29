import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";
import useMinWidth from "./useMinWidth";
// styles import necessary for jsx and scss files
// eslint-disable-next-line
import styles from "./App.scss";
import Masonry from "react-masonry-css";
import Button from "@mui/material/Button";
// route import necessary for jsx and scss files
// eslint-disable-next-line
import { Route } from "@mui/icons-material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import Header from "./Header";
import epicapisLogo from "./images/epicapisLogo.png";
import epicapisposter from "./images/epicapisposter.pdf";
import summary from "./files/epic-apis-summary.pdf";
import dataFlow from "./files/epicapis-dfd.pdf";
import TRY from "./files/try.pdf";
import infoIcon from "./images/info-icon.png";

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
  let saveSelections = false;
  const [email, setEmail] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const screenWidth = useMinWidth();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSubmitted, setShowSubmitted] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showValidatingEmail, setShowValidatingEmail] = useState(false);

  const recaptchaRef = useRef();

  // snackbar to alert modal selections submitted
  const closeModal = (submitted = false) => {
    setOpenModal(false);
    if (submitted === true) {
      setShowSuccess(openModal);
    }
  };

  // snackbar to alert email submitted
  const handleCloseSubmitted = () => {
    setShowSubmitted(false);

    if (!saveSelections) {
      const keys = window.localStorage;
      const keysToNotClear = ["count", "epicMode", "name"];
      for (const key in keys) {
        if (!keysToNotClear.includes(key)) {
          window.localStorage.removeItem(key);
        }
      }
    }
  };

  const [epicMode, setEpicMode] = useState(
    JSON.parse(localStorage.getItem("epicMode")) || false
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

  if (screenWidth < 670) {
    return (
      <>
        <div className="mediaQueryMsg">
          make yo'
          <br />
          <span className="mediaQueryText">screen</span>
          <br />
          <span className="mediaQueryText">bigger</span>
        </div>
        <div className="mediaQueryMsgToo">
          for an
          <br />
          <span className="optimizedText">optimized</span>
          <br />
          epic apis
          <br />
          experience
        </div>
      </>
    );
  }

  return (
    <main
      className={epicMode ? "epic-mode" : ""}
      onLoad={addOneToCount}
      id="top"
    >
      <div className="visitCountDiv">visit count</div>
      <p className="visitCountPara">{count}</p>
      <button type="reset" id="reset" onClick={deleteCount}>
        reset
      </button>
      <div className="logoAndNavDiv">
        <Header epicMode={epicMode} setEpicMode={setEpicMode} />
        <a href="#top">
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
            <li className="summaryPdf">
              <a
                href={summary}
                target="_blank"
                rel="noreferrer"
                title="Epic Apis Summary"
              >
                summary
              </a>
            </li>
            <li className="dataFlowPdf">
              <a
                href={dataFlow}
                target="_blank"
                rel="noreferrer"
                title="Epic Apis Data Flow"
              >
                data={">"}flow
              </a>
            </li>
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
                title="EPIC Poster Pdf"
              >
                EPIC<strong className="apisOfEpicapis">APIS</strong>
              </a>
              <br />
              <span className="myNameInfoIconSpan">
                <a
                  href={TRY}
                  className="myName listWordColor"
                  target="_blank"
                  rel="noreferrer"
                  title="TRY Graphic Art Pdf"
                >
                  La'Tonia Mertica
                </a>
                <a
                  href="https://linktr.ee/latoniamertica"
                  className="myName listWordColor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={infoIcon}
                    alt="Information icon"
                    className="infoIcon"
                    title="Link Tree: La'Tonia Mertica / La Walker"
                  />
                </a>
              </span>
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
            title="Owen Wilson API"
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
            title="Funnyest Ever User Input Modal"
            onClick={() => {
              setOpenModal("Funnyest Ever");
            }}
          ></img>

          <img
            src={chuck}
            alt="Chuck Norris Logo"
            width="183px"
            height="162px"
            className="chuck box"
            title="Chuck Norris API"
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
            title="Badassest On Tv User Input Modal"
            onClick={() => {
              setOpenModal("Badassest On Tv");
            }}
          ></img>

          <img
            src={pokemon}
            alt="Pokemon Logo"
            width="266px"
            height="109px"
            className="pokemon box"
            title="Pokemon API"
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
            title="Greatest Fantasy User Input Modal"
            onClick={() => {
              setOpenModal("Greatest Fantasy");
            }}
          ></img>

          <img
            src={starWars}
            alt="Star Wars Logo"
            width="247px"
            height="128px"
            className="starwars box"
            title="Star Wars API"
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
            title="Grittiest Army User Input Modal"
            onClick={() => {
              setOpenModal("Grittiest Army");
            }}
          ></img>

          <img
            src={cocktails}
            alt="Cocktails Logo"
            width="500px"
            height="500px"
            className="cocktails box"
            title="Cocktails DB API"
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
            title="Prettiest Drink User Input Modal"
            onClick={() => {
              setOpenModal("Prettiest Drink");
            }}
          ></img>

          <img
            src={trump}
            alt="Donald Trump Logo"
            width="188px"
            height="191px"
            className="trump box"
            title="Tronald Dump API"
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
            title="Say This Neva User Input Modal"
            onClick={() => {
              setOpenModal("Say This Neva");
            }}
          ></img>

          <img
            src={agify}
            alt="Agify Logo"
            width="500px"
            height="500px"
            className="agify box"
            title="Agify API"
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
            title="Best Age To Be User Input Modal"
            onClick={() => {
              setOpenModal("Best Age To Be");
            }}
          ></img>

          <img
            src={randomFoaasImg}
            alt="Fuck Off As A Service Logo"
            width="500px"
            height="500px"
            title="Fuck Off As A Service API"
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
            title="Last Thing Need User Input Modal"
            onClick={() => {
              setOpenModal("Last Thing Need");
            }}
          ></img>

          <img
            src={ronSwanson}
            alt="Ron Swanson Logo"
            width="286px"
            height="160px"
            className="swanson box"
            title="Ron Swanson API"
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
            title="Rampantest Lip Wig User Input Modal"
            onClick={() => {
              setOpenModal("Rampantest Lip Wig");
            }}
          ></img>

          <img
            src={marvel}
            alt="Marvel Comics Logo"
            width="140px"
            height="206px"
            className="marvel box"
            title="Marvel Comics API"
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
            title="Sexiest Alter Ego User Input Modal"
            onClick={() => {
              setOpenModal("Sexiest Alter Ego");
            }}
          ></img>

          <img
            src={epic}
            alt="Epic Img"
            width="500px"
            height="500px"
            className="epic semanticFillerImg"
            title="Epic Resource Download"
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
            title="Beautiful Code Definition Input Modal"
            onClick={() => {
              setOpenModal("Beautiful Code");
            }}
          ></img>

          <img
            src={api}
            alt="Api Img"
            width="500px"
            height="500px"
            className="api semanticFillerImg"
            title="Api Resource Download"
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
            title="Dangerous Code Definition Input Modal"
            onClick={() => {
              setOpenModal("Dangerous Code");
            }}
          ></img>
        </div>
      </Masonry>
      {/* continuous mount modal option */}
      <OwenWilson openModal={openModal} onClose={closeModal} />
      <ChuckNorris openModal={openModal} onClose={closeModal} />
      <Pokemon openModal={openModal} onClose={closeModal} />
      <StarWars openModal={openModal} onClose={closeModal} />
      <Cocktails openModal={openModal} onClose={closeModal} />
      <DonaldTrump openModal={openModal} onClose={closeModal} />
      <Agify openModal={openModal} onClose={closeModal} />
      <FOAAS openModal={openModal} onClose={closeModal} />
      <RonSwanson openModal={openModal} onClose={closeModal} />
      <Marvel openModal={openModal} onClose={closeModal} />
      {/* unmount modal when modal not open option */}
      {openModal === "Funnyest Ever" && (
        <Funnyest openModal={openModal} onClose={closeModal} />
      )}
      {openModal === "Badassest On Tv" && (
        <Badassest openModal={openModal} onClose={closeModal} />
      )}
      {openModal === "Greatest Fantasy" && (
        <Greatest openModal={openModal} onClose={closeModal} />
      )}
      {openModal === "Grittiest Army" && (
        <Grittiest openModal={openModal} onClose={closeModal} />
      )}
      {openModal === "Prettiest Drink" && (
        <Prettiest openModal={openModal} onClose={closeModal} />
      )}
      {openModal === "Say This Neva" && (
        <Say openModal={openModal} onClose={closeModal} />
      )}
      {openModal === "Best Age To Be" && (
        <Best openModal={openModal} onClose={closeModal} />
      )}
      {openModal === "Last Thing Need" && (
        <Last openModal={openModal} onClose={closeModal} />
      )}
      {openModal === "Rampantest Lip Wig" && (
        <Rampantest openModal={openModal} onClose={closeModal} />
      )}
      {openModal === "Sexiest Alter Ego" && (
        <Sexiest openModal={openModal} onClose={closeModal} />
      )}
      {openModal === "Epic" && (
        <Epic openModal={openModal} onClose={closeModal} />
      )}
      {openModal === "Beautiful Code" && (
        <Beautiful openModal={openModal} onClose={closeModal} />
      )}
      {openModal === "Api" && (
        <Api openModal={openModal} onClose={closeModal} />
      )}
      {openModal === "Dangerous Code" && (
        <Dangerous openModal={openModal} onClose={closeModal} />
      )}
      <form
        className="selectionsForm"
        onSubmit={async (event) => {
          event.preventDefault();

          setShowValidatingEmail(true);
          saveSelections = false;

          // START OF LOCAL STORAGE FOR HTML (USER INPUTS)
          const badassestSelection =
            window.localStorage.getItem("badassestSelection");
          const beautifulEntry = JSON.parse(
            window.localStorage.getItem("beautifulEntry")
          );
          const bestSelection = window.localStorage.getItem("bestSelection");
          const dangerousEntry = JSON.parse(
            window.localStorage.getItem("dangerousEntry")
          );
          const funnyestSelections = JSON.parse(
            window.localStorage.getItem("funnyestSelections")
          );
          const greatestSelections = JSON.parse(
            window.localStorage.getItem("greatestSelections")
          );
          const grittiestEntry = JSON.parse(
            window.localStorage.getItem("grittiestEntry")
          );
          const lastSelection = window.localStorage.getItem("lastSelection");
          const prettiestSelection =
            window.localStorage.getItem("prettiestSelection");
          const rampantestEntry = JSON.parse(
            window.localStorage.getItem("rampantestEntry")
          );
          const saySelection = JSON.parse(
            window.localStorage.getItem("saySelection")
          );
          const sexiestSelections = JSON.parse(
            window.localStorage.getItem("sexiestSelections")
          );
          // END OF LOCAL STORAGE FOR HTML (USER INPUTS)

          const token = await recaptchaRef.current.executeAsync();

          const response = await fetch(
            `https://epicapis-backend.latoniamertica.dev/sendEmail`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email,
                token,
                selections: {
                  badassestSelection,
                  beautifulEntry,
                  bestSelection,
                  dangerousEntry,
                  funnyestSelections,
                  greatestSelections,
                  grittiestEntry,
                  lastSelection,
                  prettiestSelection,
                  rampantestEntry,
                  saySelection,
                  sexiestSelections,
                },
              }),
            }
          );

          const emailData = await response.json();

          setShowValidatingEmail(false);
          recaptchaRef.current.reset();
          if (emailData.error) {
            setShowEmailError(true);
          } else {
            setShowSubmitted(true);
            setEmail("");
          }
        }}
      >
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey="6LdZ6g4kAAAAAP52SR3ZJjpV-pfx8NjdWZcdbXCQ"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder={"enter email address"}
          autoComplete="off"
          className="selectionsInput"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <Button
          type="submit"
          className="selectionsSubmitBtn"
          title="click to email your selections"
        >
          email selections
        </Button>
        <Snackbar
          open={!!showSubmitted}
          autoHideDuration={5000}
          onClose={handleCloseSubmitted}
          message="Email Sent!"
        >
          <Alert
            severity=""
            sx={{
              width: "100%",
              color: "#fff",
              bgcolor: "#000",
              borderRadius: 0,
            }}
          >
            {showSubmitted} Email Sent!&emsp;
            <Button
              size="small"
              onClick={() => {
                saveSelections = true;
              }}
              sx={{
                color: "#5ce1e6",
              }}
            >
              Save Selections
            </Button>
          </Alert>
        </Snackbar>
      </form>
      <Snackbar
        open={!!showSuccess}
        autoHideDuration={3000}
        // code below triggers second submitted message
        onClose={() => {
          setShowSuccess(false);
        }}
      >
        {/* code below stops second submitted message by explicitly telling program to only show the submitted message (meaning the first aka entire submitted message - not just the word "submitted") when showSuccess is true. this debug should not be needed, though . . . specifically, when the showSuccess value is updated in state, it triggers - not one, but - two rerenders. only the first rerender is needed and sought in the snackbar to set its "open={}" to false. the second rerender is prevented from showing a second snackbar alert by making the alert not show if/when showSuccess is a false value */}
        {showSuccess && (
          <Alert
            severity=""
            sx={{
              width: "100%",
              color: "#c9e265",
              bgcolor: "#545454",
              borderRadius: 0,
              fontSize: 17,
              fontFamily: "Bebas Neue",
              letterSpacing: 1.15,
            }}
          >
            {showSuccess} Submitted!&nbsp;&nbsp;
          </Alert>
        )}
      </Snackbar>
      <Snackbar
        open={!!showValidatingEmail}
        autoHideDuration={1000}
        onClose={() => {
          setShowValidatingEmail(false);
        }}
      >
        <Alert
          severity=""
          sx={{
            width: "100%",
            color: "#5ce1e6",
            bgcolor: "#241571",
            borderRadius: 0,
            fontSize: 11,
            letterSpacing: 1.15,
          }}
        >
          VALIDATING EMAIL&nbsp;&nbsp;
        </Alert>
      </Snackbar>
      <Snackbar
        open={!!showEmailError}
        autoHideDuration={3000}
        onClose={() => {
          setShowEmailError(false);
        }}
      >
        <Alert
          severity=""
          sx={{
            width: "100%",
            color: "#8b0000",
            bgcolor: "#fe2712",
            borderRadius: 0,
            fontSize: 17,
            fontFamily: "Bebas Neue",
            letterSpacing: 1.15,
          }}
        >
          EMAIL NOT SENT! CHECK ADDRESS!&nbsp;&nbsp;
        </Alert>
      </Snackbar>
    </main>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
