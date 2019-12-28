import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import ProjectCard from "src/Portfolio/ProjectsPage/projectCard/ProjectCard";
import TicTacToeGameImage from "src/images/Tic-Tac-Toe-Game.png";
import ShoppingCartImage from "src/images/Shopping-Cart.png";
import addMenuBarToComponent from "src/HOC/addMenuBarToComponent/addMenuBarToComponent";

import './ProjectsPage.scss';

class ProjectsPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeTab: 0,
        };
    };

    handleChange = (event, activeTab) => {
        this.setState({activeTab});
    };

    toggleCategories() {
        const { activeTab } = this.state;

        if (activeTab === 0) {
            return (
                <div className="react-projects">
                    <ProjectCard
                        component="img"
                        alt="project-0"
                        imageHeight={250}
                        imageWidth={400}
                        image={TicTacToeGameImage}
                        title="Tic Tac Toe"
                        summary="A simple Tic Tac Toe game built using react."
                        onImageClickURL="https://sgawron-react-game.netlify.com/"
                        buttonsList={
                            [
                                {text: "Learn More", url: "https://en.wikipedia.org/wiki/Tic-tac-toe"},
                                {text: "Game Link", url: "https://sgawron-react-game.netlify.com/"},
                                {text: "Github", url: "https://github.com/SlawomirGawron/react-game"},
                            ]
                        }
                    />
                    <ProjectCard
                        component="img"
                        alt="project-1"
                        imageHeight={250}
                        imageWidth={400}
                        image={ShoppingCartImage}
                        title="Shopping Cart"
                        summary="A shopping cart like app built using React Hooks, Redux, and Canadian Sales Tax API."
                        onImageClickURL="https://sgawron-shopping-cart.netlify.com/"
                        buttonsList={
                            [
                                {text: "Learn More", url: "https://en.wikipedia.org/wiki/Shopping_cart_software"},
                                {text: "Site Link", url: "https://sgawron-shopping-cart.netlify.com"},
                                {text: "Github", url: "https://github.com/SlawomirGawron/shopping-cart"},
                            ]
                        }
                    />
                </div>

            );
        } else if (activeTab === 1) {
            return (
                <div className="java-projects">
                </div>
            );
        } else if (activeTab === 2) {
            return (
                <div className="other-projects">
                </div>
            );
        } else {
            return (
                alert("Error #101")
            );
        }
    }

    componentDidMount() {
        this.setState({
            imageHeightInpx: this.props.mH,
            imageWidthInpx: this.props.mW
        });
    }

    render() {
        const { activeTab } = this.state;

        return (
            <div className="projects-page">
                <Tabs
                    className="projects-page-tabs"
                    value={activeTab}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="React" />
                    {/*<Tab label="Java" />*/}
                    {/*<Tab label="Other" />*/}
                </Tabs>

                <Grid container
                      spacing={16}
                      className="projects-page-grid"
                      alignItems="center"
                      direction="column"
                      style={{
                          margin: 0,
                          width: '100%',
                      }}
                >
                    <Grid item>
                        <div className="projects-grid-content">
                            {this.toggleCategories()}
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default addMenuBarToComponent(ProjectsPage);