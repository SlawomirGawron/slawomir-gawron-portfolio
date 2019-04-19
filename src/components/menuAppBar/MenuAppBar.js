import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    appBar: {
        background: '#212121'
    },
};

function MenuAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    {/*Left hand side of menu.*/}
                    {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">*/}
                        {/*<MenuIcon />*/}
                    {/*</IconButton>*/}
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        S.Gawron Portfolio
                    </Typography>

                    {/*Right hand side of menu.*/}
                    <Button color="inherit" component={Link} to="/">
                        <SvgIcon {...props}>
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
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
                </Toolbar>
            </AppBar>
        </div>
    );
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
