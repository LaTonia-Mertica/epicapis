# EVENT LISTENERS 101

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

###### [w3schools outlines capabilities and options in solid detail](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

###### [mdn web docs has solid info re: eventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

###### [event reference, event index, and more helpful information](https://developer.mozilla.org/en-US/docs/Web/Events)

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
|                                         |

<br>

**_Simply Stated_**<br>
'You can name custom events anything you want, but as a best practice, you should use all lowercase characters. Event names are case-sensitive, and the property names on elements are case-insensitive and converted to lowercase by the browser. This can create conflicts if uses on\* listeners on elements.<br>

###### | _definition courtesy general online search_

  <br>
  <br>

---

# **REACT APP:** START YOUR OWN

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
