import React from 'react';
import logo from './logo.svg';
import './App.css';

import examplePage from './pages/examplePage'
import exampleContainer from './containers/exampleContainer'

function App() {
  return (
    <div className="App">
      <examplePage />
      <exampleContainer />
    </div>
  );
}

export default App;
