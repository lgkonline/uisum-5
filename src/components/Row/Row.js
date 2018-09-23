// @flow

import React from "react";

type Props = {
    children?: any
};

class Row extends React.Component<Props> {
    render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        );
    }
}

export default Row;