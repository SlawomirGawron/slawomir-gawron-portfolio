import React, { Component } from 'react';
import MenuAppBar from "src/components/MenuAppBar/MenuAppBar";

import 'src/HOC/addCustomScrollbars/addMenuBarToComponent.scss';


function getDisplayName(WrappedComponent) {
    return (
        WrappedComponent.displayName || WrappedComponent.name || 'Component'
    );
}

function addMenuBarToComponent(WrappedComponent) {
    class AddCustomScrollbars extends Component {
        render() {
            return (
                <div className="add-menu-to-component">
                    <MenuAppBar/>
                    <WrappedComponent {...this.props}/>
                </div>
            );
        }
    }

    AddCustomScrollbars.displayName = `AddMenuToComponent(${getDisplayName(WrappedComponent)})`;

    return AddCustomScrollbars;
}

export default addMenuBarToComponent;