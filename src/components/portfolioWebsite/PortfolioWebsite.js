import React, { Component } from 'react';
import ButtonAppBar from "../MenuAppBar/MenuAppBar";
import Routing from "../Routing/Routing";


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