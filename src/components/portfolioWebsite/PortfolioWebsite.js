import React, { Component } from 'react';
import ButtonAppBar from "../menuAppBar/MenuAppBar";
import Routing from "../routing/Routing";


class PortfolioWebsite extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar/>
                <Routing/>
            </div>
        );
    }
}

export default PortfolioWebsite;