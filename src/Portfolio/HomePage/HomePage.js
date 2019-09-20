import React, { Component } from 'react';
import HomePageContent from "src/Portfolio/HomePage/HomePageContent/HomePageContent";

import 'src/Portfolio/HomePage/HomePage.scss';

class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <div className="home-page-background"/>
                <div className="home-page-background-overlay"/>
                <div className="home-page-non-background">
                    <HomePageContent />
                </div>
            </div>
        );
    }
}

export default HomePage;