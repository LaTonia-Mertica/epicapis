# **EPIC APIS**

_collection of fun, odd, quirky application programming interfaces paired with complementary resources built with semantic html - all peppered in event listeners_

<br>

### **HOW IT WORKS**

per the api setup of each api. each api is built into an engaging user interface.

_some apis simply output content_:

- Chuck Norris (random joke)
- CockTails (random drink)
- Donald Trump (random quote)
- Owen Wilson (random wow)
- Ron Swanson (random quote)

_other apis accept input to produce a result_:

- Agify (accepts person name)
- FOAAS (accepts XXXXX)
- Marvel (accepts XXXXX)
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

### <p>FOAAS: f\*\*\* off statements</p>

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

###### **helpful list:** [pokemon wiki](https://pokemon.fandom.com/wiki/List_of_Pok%C3%A9mon)

###### **helpful list+:** [star wars spacecrafts](https://en.wikipedia.org/wiki/List_of_Star_Wars_spacecraft)

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
  `module.exports = apikeyhere`

- add that file to the gitignore file.
  `apikey.js`

- in the file using the api key, assign a variable to the api key as a require statement.
  `const apikey = require("./apikey");`

- use the variable assigned to the api key in every instance the actual api key would normally be used.
  `http://gateway.marvel.com/v1/public/creators?ts=1&apikey=${apikey}`

  <br>

**_explanation of interplay between api key, hash, and ts per marvel documentation:_**

'Authentication for Server-Side Applications
Server-side applications must pass two parameters in addition to the apikey parameter:

ts - a timestamp (or other long string which can change on a request-by-request basis)

hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)

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
