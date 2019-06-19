import React, { Component } from 'react';
import Routing from "src/components/Routing/Routing";
import MenuAppBar from "src/components/MenuAppBar/MenuAppBar";

class PortfolioWebsite extends Component {
    render() {
        return (
            <div>
                <MenuAppBar/>
                <Routing/>
            </div>
        );
    }
}

export default PortfolioWebsite;