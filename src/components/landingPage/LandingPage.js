import React, { Component } from 'react';
import LandingPageMenu from "./LandingPageMenu/LandingPageMenu";
import LandingPageContent from "./LandingPageContent/LandingPageContent";
import './LandingPage.scss';

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                {/*<LandingPageMenu />*/}
                <LandingPageContent />
            </div>
        );
    }
}

export default LandingPage;