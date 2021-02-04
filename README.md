
REACT APPLICATION FOR HANDLING DATA OF CHILDREN AT THE DAYCARE


PURPOSE
It is a test project for application purposes at Famly


DESCRIPTION
It is a single-page React application, created with React.js version 17.0.1.

Beside React, Bootstrap was installed in order to handle the simple design part of the app.

The solution contains 3 types of components additionally over the standard/usual components, and basically this is how the screen is divided up to: 
- navigation
- display (main part)
- card for showing the children individually.

This separation makes it easier to navigate between the code, and to have a clear structure.

In the components, one can find Class Components and Functional Components as well. The reason to use both types was, that I have just familiarized myself with React.js, and this way I experimented with them in different scenarios.

During the development, I intended to separate the different actions from each other so I placed them into separate functions. The main reason for that was to make the code more understandable and reuseable. Moreover using states in the Child.js file was for the same reason: avoid long if-statements and complicated logic.

My other intention during the design was to get rid of as much duplicate code as I can. It was especially possible by using states and by storing multiple datapairs in the state object (in Child.js). I built up the card elements in a dynamic way by using a template, and this structure is also able to handle the visual changes of the site when the user interacts with it by pressing the buttons.

The data for the application is aquired by calling the APIs that were provided in the description of the task. The URLs and arguments are stored in variables in order to make it easy in the future to change them. Furthermore I can imagine in further development they could be all stored in a configuration file.

If the APIs fails for some reason, for now the error message is written out in the console. This feature could be extended with thorough errorhandling and messages in the interface.

The most important dataset of the application is the one that contains all the information about children. After receiving it from the API, it is stored in a "children" state and it is accessable with all its details thoroughout the application. This way the API needs to be called only one time during the visit of the application. 

At the checkin API, I hardcoded the pickup time argument for '23.59', because of short of time for the project. The child cards could be extended with input fields in order to be able to pass pickuptime data from the interface to the API.

The visual design was not part of the assignment, but I added a few details in order to make the user-experience smoother, and the use of the application self-explanatory. I faded the checkedout children cards and made clearly visible the checkedin children in order to visually communicate that they are present or not in the daycare. To reach this effect, I used classes and CSS.




****************************************************************************************************************************



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
