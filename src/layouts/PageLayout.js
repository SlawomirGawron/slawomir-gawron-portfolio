import React, { Component } from 'react';
import ButtonAppBar from "../components/ButtonAppBar";
import Routing from "../components/Routing";


class PageLayout extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar/>
                <Routing/>
            </div>
        );
    }
}

export default PageLayout;