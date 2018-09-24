// @flow

import React from "react";

import "./Page.css";

type Props = {
    children?: any,
    routeName: string
};

class Page extends React.Component<Props> {
    render() {
        return (
            <div className="Page">
                {this.props.children}
            </div>
        );
    }
}

export default Page;