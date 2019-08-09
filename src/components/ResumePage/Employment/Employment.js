import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

import 'src/components/ResumePage/Employment/Employment.scss';

class Employment extends Component {
    render() {
        return (
            <div className="employment-div">
                <Grid container
                      className="employment-grid"
                      justify="center"
                      spacing={0}
                      direction="row"
                      alignItems="stretch"
                >
                    <Grid item xs className="left-column-employment">
                        <Typography color="inherit" variant="body1" gutterBottom>
                            {this.props.startDate} - {this.props.endDate}
                        </Typography>
                    </Grid>
                    <Grid item xs={10} className="right-column-employment">
                        <Typography style={{margin: "0"}} color="inherit" variant="h5" gutterBottom>
                            {this.props.jobTitle}
                        </Typography>
                        <Typography color="inherit" variant="body1" gutterBottom>
                            {this.props.description}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Employment.propTypes = {
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    description: PropTypes.string
};

export default Employment;