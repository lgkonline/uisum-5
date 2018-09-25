// @flow

import React from "react";

import "./MenuItem.css";

type Props = {
    active?: boolean,
    children?: any,
    className?: string,
    href?: string,

    /**
     * Icon element. For e.g. `<span class="icon-twitter" />`
     */
    icon?: any,
    label?: string,
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
                {this.props.icon &&
                    <span className="MenuItem-icon">
                        {this.props.icon}
                    </span>
                }
                {this.props.icon && this.props.label ? <span>&nbsp;</span> : ""}
                {this.props.label &&
                    <span className="MenuItem-label">
                        {this.props.label}
                    </span>
                }
                {this.props.children}
            </a>
        );
    }
}

export default MenuItem;