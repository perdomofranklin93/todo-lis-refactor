import React from 'react';
import './App.css';
import { authClient } from './services';

function App(): React.ReactElement {

  if (!authClient.checkIsAuthorized()) {
    authClient.authorize();
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
