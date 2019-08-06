import React, { Component } from 'react';
import Routing from "src/components/Routing/Routing";

import './PortfolioWebsite.scss';

class PortfolioWebsite extends Component {
    render() {
        return (
            <div className="portfolio-website">
                <Routing/>
            </div>
        );
    }
}

export default PortfolioWebsite;