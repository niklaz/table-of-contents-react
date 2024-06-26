import React from 'react';
import './assets/style/App.scss';
import ToC from './layouts/ToC';
import { ChapterProvider } from './providers/ChapterProvider';


/*
*  App component that renders the Table of Contents
*
* @returns - JSX.Element
* */
function App() {
  return (
    <div className="App">
      <div className="App-body">
          <ChapterProvider>
                <ToC />
          </ChapterProvider>
      </div>
    </div>
  );
}

export default App;
