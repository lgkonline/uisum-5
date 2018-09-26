// @flow

import React from "react";

import "./SidebarController.css";

type Props = {
    children?: any,
    className?: string,
    in: boolean
};

type State = {
    in: boolean
};

class SidebarController extends React.Component<Props, State> {
    state = {
        in: false
    };

    render() {
        return (
            <div
                className={
                    "SidebarController" +
                    (this.props.className ? " " + this.props.className : "") +
                    (this.props.in ? " in" : "")
                }
            >
                {this.props.children}
            </div>
        );
    }
}

export default SidebarController;