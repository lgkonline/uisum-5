// @flow

import React from "react";

import "./Container.css";

type Props = {
    fluid?: boolean,
    children?: any
};

class Container extends React.Component<Props> {
    static defaultProps = {
        fluid: false
    };

    render() {
        return (
            <div
                className={"Container" + (this.props.fluid ? " fluid" : "")}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Container;