import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import LinearProgress from '@material-ui/core/LinearProgress';

import './Skills.scss';

const styles = theme => ({
    linearColorPrimary: {
        backgroundColor: 'white',
    },
    linearBarColorPrimary: {
        backgroundColor: '#00695c',
    },
});

function Skills(props) {
    const {classes} = props;

    return (
        <div className="skills-div">
            <Grid container
                  className="skills-grid"
                  justify="flex-start"
                  spacing={0}
                  direction="row"
                  alignItems="stretch"
            >
                <Grid item xs={2} className="skills-column-left">

                    <Typography color="inherit" variant="body1" gutterBottom>
                        {props.skill}
                    </Typography>

                </Grid>
                <Grid item xs={10} className="skills-column-right">
                    <LinearProgress
                        classes={{
                            colorPrimary: classes.linearColorPrimary,
                            barColorPrimary: classes.linearBarColorPrimary,
                        }}
                        style={{
                            marginLeft: "1em",
                            marginTop: "0.6em",
                            width: "25%",
                            justifyContent: "flex-start"
                        }}
                        variant="determinate"
                        value={props.progress}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
    skill: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired
};

export default withStyles(styles)(Skills);