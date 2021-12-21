import React from 'react';
import './App.css';
import Issue from "../issue/Issue";

function App() {
  return (
    <div className="app">
        <div className="application-title">
            GitHub Issues and Comments
        </div>
        <Issue />
    </div>
  );
}

export default App;
