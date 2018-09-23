// @flow

import React from "react";

type Props = {
    children?: any,
    breakpoint?: string,
    size: number
};

class Col extends React.Component<Props> {
    render() {
        return (
            <div
                className={"col-" + (this.props.breakpoint ? this.props.breakpoint + "-" : "") + this.props.size}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Col;