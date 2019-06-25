import React, { Component } from 'react';

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
                <div className="add-custom-scrollbars">
                    <WrappedComponent {...this.props}/>
                </div>
            );
        }
    }

    AddCustomScrollbars.displayName = `AddCustomScrollbars(${getDisplayName(WrappedComponent)})`;

    return AddCustomScrollbars;
}

export default addCustomScrollbars;