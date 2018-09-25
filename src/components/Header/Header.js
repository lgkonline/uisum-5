// @flow

import React from "react";

import "./Header.css";

type Props = {
    children?: any,
    className?: string,
    sticky?: boolean
};

class Header extends React.Component<Props> {
    static defaultProps = {
        sticky: false
    };

    render() {
        return (
            <header
                className={
                    "Header" +
                    (this.props.className ? " " + this.props.className : "") +
                    (this.props.sticky ? " sticky" : "")
                }
            >
                {this.props.children}
            </header>
        );
    }
}

export default Header;