# **EPIC APIS**

_collection of fun, odd, quirky application programming interfaces paired with complementary resources built with semantic html - all peppered in event listeners_

##### [epic apis summary](public/epic-apis-summary.pdf)

##### [epic apis data flow](public/epicapis-dfd.pdf)

###### **note:** this is more accurately a process/data flow diagram

##### [trello project management](https://trello.com/b/YLTdkWTR/epicapis)

##### [frontend github repo](https://github.com/LaTonia-Mertica/epicapis)

##### [backend github repo](https://github.com/LaTonia-Mertica/epicapis-db)

<br>

---

### **CODE CAVALRY**

###### _<p style="text-align: justify">but first, my mentors rock.</p>_

###### _<p style="text-align: justify">max has been and remains primary re: project-based code/web dev while also helping initiate me into the code world of algorithms. max was among my first instructors as i began my coding journey in hack upstate ['careers in code'](https://careersincode.org/). max demos a rare blend of know-how and get-to in his role as a code master. and he doesn't shy from telling me i already know when he sees my confidence hiding, he doesn't shy from settling into his lecture mode when he sees me lacking self care, he doesn't shy from being someone to just listen when it's clear that's what's needed at that time.</p>_

###### _<p style="text-align: justify">adam has insane skills re: code refactoring, as routine outlines theory versus application/implementation, and enthusiastically encourages me to own my code.</p>_

###### _<p style="text-align: justify">danny has been a tremendous support re: debugging miscellaneous errors and warnings in the console - including introducing me to advanced concepts in chrome and react-specific dev tools. this is especially notable because it helps my growth mindset push beyond just getting my code to work. but instead pursuing a sense of elegant code integrity.</p>_

###### _<p style="text-align: justify">jess has inspiring code flow that impeccably reflects novice-coder mindset dressed in raw mastery, and is dogged re: producing optimized code output.</p>_

###### _<p style="text-align: justify">adam, danny, and jess have been exceptional supports re: expanding my knowledge and skillset to include algorithms and advanced project-work. they are part of the team assigned to pair program 1:1 with me through [underdog devs](https://www.underdogdevs.org/) '[project underdog](https://www.underdogdevs.org/project-underdog)'.</p>_

###### _<p style="text-align: justify">each of these mentors excel in part, in my experience-informed opinion, because they consistently share compassion, patience, and sincere interest in my code/web dev ambitions. they make me feel like i can, and they do what they can to ensure i do/will.</p>_

###### _my mentors (and peers) include gems. thank you adam, danny, jess, max, and others for being you and doing what you do.</p>_

#### \* [MAX MATTHEWS](https://github.com/maxmatthews), Tuzag Chief Technology Officer

#### \* [ADAM FLETCHER](https://www.linkedin.com/in/adam-w-fletcher/), Bit.io Chief Executive Officer / Founder

#### \* [DANNY JACOSHENK](https://github.com/djacoshenk), Pilot Software Engineer

#### \* [JESS BONANNO](https://github.com/JessBonanno), Slack Software Engineer

---

<br>

### **HOW EPIC APIS WORKS**

per the api setup of each api. each api is built into an engaging user interface.

_some apis simply output content_:

- Chuck Norris (random joke)
- CockTails (random drink)
- Donald Trump (random quote)
- FOAAS (random eff-off)
- Owen Wilson (random wow)
- Ron Swanson (random quote)

_other apis accept input to produce a result_:

- Agify (accepts person name)
- Marvel (accepts creator name)
- Pokemon (accepts pokemon name)
- Star Wars (accepts starship name)

<br>

### **WHAT EPIC APIS DOES**

epic apis provides a unique user experience through a medley of colorful apis

<br>

### **API**

'An application programming interface is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software.'

###### | _definition courtesy wikipedia_

<br>

## **APIS OF EPICAPIS**

### <p>[AGIFY:](https://agify.io/) age guess per provided name</p>

### <p>[CHUCK NORRIS:](https://api.chucknorris.io/) jokes re: legendary bad\*ss</p>

### <p>[COCKTAILS:](https://www.thecocktaildb.com/) info re: mature drinks</p>

### <p>[FOAAS:](https://foaas.com/) f\*\*\* off statements</p>

### <p>[MARVEL:](https://developer.marvel.com/) library of comics info</p>

### <p>[OWEN WILSON:](https://owen-wilson-wow-api.herokuapp.com/) spontaneous wow moments</p>

### <p>[POKEMON:](https://pokeapi.co/) extra-galactical world</p>

### <p>[RON SWANSON:](https://github.com/jamesseanwright/ron-swanson-quotes) 'because (he) is a hero'</p>

### <p>[STAR WARS:](https://swapi.dev/) unparalleled universe</p>

### <p>[TRONALD DUMP:](https://www.tronalddump.io/) dummest things said</p>

<br>

###### **fun find:** [21 Best FOAAS API Alternatives in 2022](https://www.jsonapi.co/public-api/FOAAS)

###### **fun find+:** [pink was once a masculine color](https://en.wikipedia.org/wiki/Pink)

###### **fun find++:** [x mark symbol | dec code v hex code v unicode](https://www.copyandpastesymbols.net/x-symbol.html)

###### **fun find+=:** [happy-sad toggle checkbox](https://codingartistweb.com/2020/01/happy-sad-toggle-switch-custom-css-checkbox/)

###### **bonus find:** [... how many effs i have ...](http://nofuckstogive.today/index.html)

<br>

###### **helpful list:** [pokemon wiki](https://pokemon.fandom.com/wiki/List_of_Pok%C3%A9mon)

###### **helpful list+:** [marvel creators](https://www.marvel.com/comics/creators)

###### **helpful list++:** [star wars spacecrafts](https://en.wikipedia.org/wiki/List_of_Star_Wars_spacecraft)

<br>

---

### **AXIOS VERSUS FETCH**

`axios` and `fetch` are used in the epic apis project for practice with both libraries. `async/await` and `.then` are both used in the epic apis project for familiarity with both types of asynchronous code syntax. `fetch` and `async/await` are the more modern and preferred methods. a bit more detail regarding `axios` versus `fetch`:

- axios is generally considered the old way to setup an api call. **still, axios is included in this project:**<br>

  - for illustration of how to implement axios when, for example, the need arises such as working with legacy code<br>

**axios and fetch | pros and cons:** some brief comparisons include, axios requires installing while fetch is built in. axios automatically stringifies data while fetch requires manual stringification. performance for both is about the same.

###### [axios versus fetch for beginners](https://meticulous.ai/blog/fetch-vs-axios/)

<br>

### **BASIC STRUCTURE: AXIOS**

```
function ChuckNorris({ openModal, onClose }) {
const [joke, setJoke] = useState({
joke: "",
});

useEffect(() => {
getData();
// disable rule
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

const getData = async () => {
const data = await axios.get(`https://api.chucknorris.io/jokes/random`);

    setJoke({
      ...joke,
      joke: data.data.value,
    });

};

// more code here

}
```

<br>

### **BASIC STRUCTURE: FETCH**

```
const getAgeMyName = async (event) => { event.preventDefault(); const response = await fetch(`https://api.agify.io?name=${name}`);

const data = await response.json();
setAgeByName({
age: data.age,
name: data.name,
count: data.count,
});
};
```

<br>

---

## **MORE HELPFUL STRUCTURES**

### **BASIC STRUCTURE: API KEY | HASH | TS**

- create a file to store the api key (ie. apikey.js) . ..
  `module.exports = apikeyhere` **or** `export default "apikeyhere";`. while `module.exports =` works, it is the previous method and requires a `require("filenamewithextensionhere")` statement in the receiving file. more modern is `export default` that requires an import in the receiving file.

- add that file to the gitignore file.
  `apikey.js`

- in the file using the api key aka the receiving file, assign a variable to the api key as a require statement:
  `const apikey = require("./apikey");`
  **OR**
- in the file using the api key aka the receiving file, import the file containing the apikey at/near the top of the file:
  `import apikey.js`

###### **note:** again, import/export is the more modern and recommended implemenation method. both are included here for posterity of demonstration - ie. if you see or work in legacy code

<br>

- use the variable assigned to the api key in every instance the actual api key would normally be used.
  `http://gateway.marvel.com/v1/public/creators?ts=1&apikey=${apikey}`

  <br>

**_explanation of interplay between api key, hash, and ts per marvel documentation:_**

'Authentication for Server-Side Applications
Server-side applications must pass two parameters in addition to the apikey parameter:

ts - a timestamp (or other long string which can change on a request-by-request basis)

hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey))

For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call as follows: http://gateway.marvel.com/v1/public/creators?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 (the hash value is the md5 digest of 1abcd1234)'

<br>

###### [one way to create a hash](https://www.npmjs.com/package/js-md5)

**install command:** `npm install js-md5`<br>
**import statement** `import md5 from "js-md5";`

<br>

### **BASIC STRUCTURE: TRY CATCH**

```
try {
// code here
} catch (error) {
console.log("error message in here" + error);
}
```

<br>

### **BASIC STRUCTURE: CONSOLE LOG ERROR**

```
.catch((error) => {
  console.error(error);
  setError("No listing for that name, apologies!");
  });
.catch((error) =>
console.log(error));
```

<br>

---

### **EVENT LISTENERS 101**

- basic single event syntax:<br> `element.addEventListener(event, function, useCapture);`
- basic multi event syntax:<br> `element.addEventListener("click", myFunction); element.addEventListener("click", mySecondFunction);`
  <br>
  <br>

**EXAMPLE: ONLICK EVENT**<br>

element.addEventListener("click", myFunction);

```json
function myFunction() {
alert ("Hello Code World!");
}
```

<br>

###### [- w3schools outlines capabilities and options in solid detail](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

###### [- mdn web docs has solid info re: eventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

###### [- event reference, event index, and more helpful information](https://developer.mozilla.org/en-US/docs/Web/Events)

<br>

**_Simply Stated_**<br>
'You can add many event handlers to one element. You can add many event handlers of the same type to one element, i.e two "click" events. You can add event listeners to any DOM object not only HTML elements. i.e the window object.' <br>

###### | _definition courtesy general online search_

<br>
<br>

| COMMON HTML / JS EVENTS (A FEW)         |
| --------------------------------------- |
| onblur: _element blurs_                 |
| onclick: _element is clicked_           |
| onchange: _specified change occurs_     |
| onfocus: _specified focus is active_    |
| onkeydown: _key is pressed down_        |
| onmouseover: _mouse moves over element_ |
| onsubmit: _submission is triggered_     |

<br>

**_Simply Stated_**<br>
'You can name custom events anything you want, but as a best practice, you should use all lowercase characters. Event names are case-sensitive, and the property names on elements are case-insensitive and converted to lowercase by the browser. This can create conflicts if uses on\* listeners on elements.<br>

###### | _definition courtesy general online search_

<br>

### **NEXT STEPS (TOP RANKED)**

- **_reusable code_**: per import/export for functions and state used in multiple components

- **_email api_**: allow users to select parts of their activity/selections to email (versus default to all)

- **_accessibility optimization_**: regarding code and styles

- **_media queries_**: optimize for devices/screens of all standard sizes, including per mobile first approach

<br>

---

# **CREATE A REACT APP**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
