// @flow

import React from "react";

import "./Btn.css";

type Props = {
    children?: any,
    className?: string,

    /**
     * Fires when user clicks button.
     */
    onClick?: (event: Event) => void,
    primary?: boolean
};

/**
 * Button as you might know it from Bootstrap.
 */
class Btn extends React.Component<Props> {
    static defaultProps = {
        primary: false
    };

    render() {
        return (
            <button
                className={
                    "Btn" +
                    (this.props.primary ? " primary" : "") +
                    (this.props.className ? " " + this.props.className : "")
                }
                onClick={this.props.onClick && this.props.onClick}
            >
                {this.props.children}
            </button>
        );
    }
}

export default Btn;