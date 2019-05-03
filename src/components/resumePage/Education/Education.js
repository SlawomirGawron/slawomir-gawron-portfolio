import React, { Component } from 'react';
import './Education.scss';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

class Education extends Component {
    render() {
        return (
            <div className="education-div">
                <Grid container
                      className="education-grid"
                      justify="center"
                      spacing={0}
                      direction="row"
                      alignItems="stretch"
                >
                    <Grid item xs className="left-column-education">
                        <Typography color="inherit" variant="body1" gutterBottom>
                            {this.props.startDate} - {this.props.endDate}
                        </Typography>
                    </Grid>
                    <Grid item xs={10} className="right-column-education">
                        <Typography style={{margin: "0"}} color="inherit" variant="h5" gutterBottom>
                            {this.props.schoolName}
                        </Typography>
                        <Typography style={{margin: "0"}} color="inherit" variant="h6" gutterBottom>
                            {this.props.degreeName}
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

Education.propTypes = {
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    schoolName: PropTypes.string.isRequired,
    degreeName: PropTypes.string.isRequired,
    description: PropTypes.string
};

export default Education;