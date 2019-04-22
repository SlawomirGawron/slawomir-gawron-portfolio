import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';

import './MenuAppBar.scss';

class MenuAppBar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" className="app-bar">
                    <Toolbar className="toolbar">
                        {/*Left hand side of menu.*/}
                        <section>
                            {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">*/}
                            {/*<MenuIcon />*/}
                            {/*</IconButton>*/}
                            <Typography variant="h6" color="inherit">
                                S.Gawron Portfolio
                            </Typography>
                        </section>

                        {/*Right hand side of menu.*/}
                        <section>
                            <Button color="inherit" component={Link} to="/">
                                <SvgIcon>
                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                                </SvgIcon>
                            </Button>
                            <Button color="inherit" component={Link} to="/resume">
                                Resume
                            </Button>
                            <Button color="inherit" component={Link} to="/aboutMe">
                                About Me
                            </Button>
                            <Button color="inherit" component={Link} to="/projects">
                                Projects
                            </Button>
                            <Button color="inherit" component={Link} to="/contact">
                                Contact
                            </Button>
                        </section>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default MenuAppBar;
