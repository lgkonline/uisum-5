// @flow

import React from "react";

import "./Sidebar.css";

type Props = {
    children?: any,
    in?: boolean
};

class Sidebar extends React.Component<Props> {
    static defaultProps = {
        in: false
    };

    render() {
        return (
            <div
                className={
                    "Sidebar" +
                    (this.props.in ? " in" : "")
                }
            >
                {this.props.children}
            </div>
        );
    }
}

export default Sidebar;