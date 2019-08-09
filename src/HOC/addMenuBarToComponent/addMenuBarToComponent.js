import React, { Component } from 'react';
import MenuAppBar from "src/components/MenuAppBar/MenuAppBar";

import 'src/HOC/addMenuBarToComponent/addMenuBarToComponent.scss';


function getDisplayName(WrappedComponent) {
    return (
        WrappedComponent.displayName || WrappedComponent.name || 'Component'
    );
}

function addMenuBarToComponent(WrappedComponent) {
    class AddMenuToComponent extends Component {
        render() {
            return (
                <div className="add-menu-to-component">
                    <MenuAppBar/>
                    <WrappedComponent {...this.props}/>
                </div>
            );
        }
    }

    addMenuBarToComponent.displayName = `AddMenuToComponent(${getDisplayName(WrappedComponent)})`;

    return AddMenuToComponent;
}

export default addMenuBarToComponent;