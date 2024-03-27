# Table of Contents - React App

- [Table of Contents - React App](#table-of-contents---react-app)
  - [About](#about)
  - [JSON Data Structure](#json-data-structure)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)
  - [Learn More](#learn-more)

## About

This project is a simple React app that displays a table of contents. The table of contents is generated from a REST API response in form of JSON output that contains the structure of the table of contents. 

For testing purposes, there is a mock json-server in the backend folder that serves the JSON file. 
Install the dependencies and run the mock server to test the app using `npm start`. 
Server runs on [http://localhost:3004](http://localhost:3004).

In the production environment, the app fetches the JSON data from the actual REST API endpoint. 
Base URL for the API is defined src/config/APIConfig.ts file.
For production purposes, this can be changed to the actual API endpoint, and also extracted to an environment variable ```API_URL```.

## JSON Data Structure

The JSON output contains an array of objects under ```document``` node. 

```json
{
  "data": {
    "content": {
      "document": [
          {
          "id": "951a4781-92fb-48da-907c-c320f9886879",
          "name": "Chapter 1",
          "level": 1,
          "parent_id": "", 
          "content": "Chapter 1 subscript"
          }
        ]
      }
  }
}

```
Each object represents a section of the table of contents. Each object has the following properties:


```id``` - The id of the section.

```name``` - The title of the section.

```level``` - The level of the section. The level of the section is 1 if it is a chapter, 2 if it is a section, 3 if it is a subsection, and so on.

```parent_id```  - The id of the parent section, the parent_id is empty if chapter is level 1.

```content``` - The content of the section. 



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


To learn React, check out the [React documentation](https://reactjs.org/).
