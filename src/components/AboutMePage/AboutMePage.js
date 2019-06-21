import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import './AboutMePage.scss';

class AboutMePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    componentDidUpdate() {
        const { windowWidth, windowHeight} = this.state;
        const currentWidth=window.innerWidth;
        const currentHeight=window.innerHeight;

        if ( (currentWidth !== windowWidth)
             || (currentHeight !== windowHeight) ) {
            this.updateWindowDimensions();
        }
    }

    updateWindowDimensions() {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    }

    render() {
        const { windowWidth, windowHeight} = this.state;
        console.log("width: " + this.state.width );
        console.log("height: " + this.state.height);

        return (
            <div className="about-me-page"
                 style={{
                     width: windowWidth,
                     height:(windowHeight*0.9)
                 }}
            >
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