// @flow

import React from "react";

import "./SidebarController.css";

type Props = {
    children?: any,
    className?: string,
    in: boolean,
    onClose: ?() => void
};

class SidebarController extends React.Component<Props> {
    render() {
        return (
            <div
                className={
                    "SidebarController" +
                    (this.props.className ? " " + this.props.className : "") +
                    (this.props.in ? " in" : "")
                }
            >
                {this.props.in &&
                    <div
                        className="SidebarController-wrapper"
                        onClick={() => {
                            if (this.props.onClose) {
                                this.props.onClose();
                            }
                        }}
                    />
                }

                {this.props.children}
            </div>
        );
    }
}

export default SidebarController;