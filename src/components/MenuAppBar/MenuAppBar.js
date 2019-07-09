import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

import './MenuAppBar.scss';

class MenuAppBar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" className="app-bar">
                    <Toolbar className="toolbar">
                        {/*Left hand side of menu.*/}
                        <section className="left-side-menu">
                            <Typography variant="h6" color="inherit">
                                S.Gawron Portfolio
                            </Typography>
                        </section>

                        {/*Right hand side of menu.*/}
                        <section className="right-side-menu">
                            <Button color="inherit" component={Link} to="/">
                                <HomeIcon
                                    style={{fontSize: 25}}
                                />
                            </Button>
                            <Button color="inherit" component={Link} to="/resume">
                                <Typography color="inherit" variant="button">
                                    Resume
                                </Typography>
                            </Button>
                            <Button color="inherit" component={Link} to="/aboutMe">
                                <Typography color="inherit" variant="button">
                                    About Me
                                </Typography>
                            </Button>
                            <Button color="inherit" component={Link} to="/projects">
                                <Typography color="inherit" variant="button">
                                    Projects
                                </Typography>
                            </Button>
                            <Button color="inherit" component={Link} to="/contact">
                                <Typography color="inherit" variant="button">
                                    Contact
                                </Typography>
                            </Button>
                        </section>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default MenuAppBar;
