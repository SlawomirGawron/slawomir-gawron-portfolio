import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import 'src/HOC/addCustomScrollbars/addCustomScrollbars.scss';

function getDisplayName(WrappedComponent) {
    return (
        WrappedComponent.displayName || WrappedComponent.name || 'Component'
    );
}

function addCustomScrollbars(WrappedComponent) {
    class AddCustomScrollbars extends Component {
        render() {
            return (
                <Scrollbars
                    autoHide={false}
                    renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                    renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}

                    renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
                    renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
                >
                    <WrappedComponent {...this.props}/>
                </Scrollbars>
            );
        }
    }

    AddCustomScrollbars.displayName = `AddCustomScrollbars(${getDisplayName(WrappedComponent)})`;

    return AddCustomScrollbars;
}

export default addCustomScrollbars;