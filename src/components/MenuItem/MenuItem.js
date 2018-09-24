// @flow

import React from "react";

import "./MenuItem.css";

type Props = {
    active?: boolean,
    children?: any,
    className?: string,
    href?: string,
    onClick?: () => void
};

class MenuItem extends React.Component<Props> {
    static defaultProps = {
        // eslint-disable-next-line
        href: "javascript:void(0)"
    };

    render() {
        return (
            <a
                href={this.props.href}
                className={
                    "MenuItem" +
                    (this.props.className ? " " + this.props.className : "") +
                    (this.props.active ? " active" : "")
                }
                onClick={this.props.onClick}
            >
                {this.props.children}
            </a>
        );
    }
}

export default MenuItem;