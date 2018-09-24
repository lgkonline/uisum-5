// @flow

import React from "react";

import MenuItem from "../MenuItem/MenuItem";
import "./ActionMenu.css";

type Props = {
    children?: any,

    /**
     * Will align the menu on the right side.
     */
    right?: boolean
};

type State = {
    in: boolean
};

class ActionMenu extends React.Component<Props, State> {
    state = {
        in: false,
        toggleable: false
    };

    render() {
        return (
            [
                <div
                    key={0}
                    className={"ActionMenu-wrapper" +
                        (this.state.in ? " in" : "")}
                    onClick={() => this.setState({ in: false })}
                />,
                <div
                    key={1}
                    className={"ActionMenu" +
                        (this.state.in ? " in" : "") +
                        (this.state.toggleable ? " toggleable" : "") +
                        (this.props.right ? " right" : "")
                    }
                >
                    <MenuItem
                        className="ActionMenu-toggle"
                        onClick={() => this.setState({ in: !this.state.in })}
                    >
                        <span className="icon-dots-three-vertical" />
                    </MenuItem>
                    {this.props.children}
                </div>
            ]
        );
    }
}

export default ActionMenu;