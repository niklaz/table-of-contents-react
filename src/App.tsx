import React from 'react';
import './App.css';
import ToC from './layouts/ToC';
import { ChapterProvider } from './providers/ChapterProvider';
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
