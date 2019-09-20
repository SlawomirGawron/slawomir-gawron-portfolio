import React, { Component } from 'react';
import Portfolio from "src/Portfolio/Portfolio";

import 'src/app/App.scss';

class App extends Component {
  render() {
    return (
        <div className="main-app">
          <Portfolio/>
        </div>
    );
  }
}

export default App;
