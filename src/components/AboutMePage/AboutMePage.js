import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import './AboutMePage.scss';

class AboutMePage extends Component {
    render() {
        return (
            <div className="about-me-page">
                <Scrollbars
                    autoHide={false}
                    renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                    renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}

                    renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
                    renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
                >
                    <h1>About meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
                    <h1>About meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
                    <h1>About meeee</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                    <h1>About me</h1>
                </Scrollbars>
            </div>
        );
    }
}

export default AboutMePage;