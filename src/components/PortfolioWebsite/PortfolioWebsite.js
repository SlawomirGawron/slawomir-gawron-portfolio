import React, { Component } from 'react';
import Routing from "src/components/Routing/Routing";
import MenuAppBar from "src/components/MenuAppBar/MenuAppBar";

import './PortfolioWebsite.scss';
import { Scrollbars } from 'react-custom-scrollbars';

class PortfolioWebsite extends Component {
    render() {
        return (
            <div className="portfolio-website">
                <MenuAppBar/>
                <Routing/>
            </div>
        );
    }
}

export default PortfolioWebsite;