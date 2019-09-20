import React, { Component } from 'react';
import Routing from "src/Portfolio/Routing/Routing";

import 'src/Portfolio/Portfolio.scss';

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio-website">
                <Routing/>
            </div>
        );
    }
}

export default Portfolio;