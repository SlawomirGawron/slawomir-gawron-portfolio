import React, { Component } from 'react';
import PortfolioWebsite from "src/components/PortfolioWebsite/PortfolioWebsite";

import 'src/app/App.scss';

class App extends Component {
  render() {
    return (
        <div className="main-app">
          <PortfolioWebsite/>
        </div>
    );
  }
}

export default App;
