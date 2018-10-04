// @flow

import React from "react";

import MenuItem from "../MenuItem/MenuItem";

type Props = {
    activeMatchItem: any,
    menuItems: Array<any>,
    onClickMenuItem: ?() => void
};

class NavMenu extends React.Component<Props> {
    static defaultProps = {
        onClickMenuItem: () => { }
    }

    render() {
        return (
            this.props.menuItems ? this.props.menuItems.map((menuItem, key) =>
                <MenuItem
                    key={key}
                    onClick={this.props.onClickMenuItem}
                    active={menuItem.props.href.indexOf(this.props.activeMatchItem) > -1}
                    {...menuItem.props}
                />
            )
                :
                <div />
        );
    }
}

export default NavMenu;