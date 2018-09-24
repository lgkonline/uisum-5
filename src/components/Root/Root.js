// @flow

import React from "react";

import "./Root.css";

type Props = {
    children?: any,
    className?: string,
    routes?: Array<any>
};

type State = {
    match?: ?Array<string>,
    route?: any,
    history: Array<string>,
    hash: string
};

/**
 * This component is the backbone of your application.
 */
class Root extends React.Component<Props, State> {
    defaultMatch = ["home"];

    state = {
        match: null,
        route: null,
        history: [],
        hash: window.location.hash
    };

    componentWillMount() {
        // window.RootRef = this;

        this.initMatch();

        window.addEventListener("hashchange", event => {
            this.initMatch();
        });
    }

    initMatch() {
        let newMatch;
        if (window.location.hash && window.location.hash !== "" && window.location.hash !== "#/") {
            newMatch = decodeURIComponent(window.location.hash.replace("#", "")).split("/").filter(n => n !== "");
        }
        else {
            newMatch = this.defaultMatch;
        }

        let newRoute;
        if (this.props.routes) {
            this.props.routes.forEach(route => {
                if (newMatch && newMatch[0] === route.props.routeName) {
                    newRoute = route;

                    if (newRoute.type.prototype.componentDidRoute) {
                        newRoute.type.prototype.componentDidRoute();
                    }
                }
            });
        }

        if (!(this.state.history.indexOf(newMatch[0]) > -1)) {
            this.state.history.push(newMatch[0]);
        }

        this.setState({
            match: newMatch,
            route: newRoute,
            history: this.state.history,
            hash: window.location.hash
        });
    }

    render() {
        return (
            <div className={"Root" + (this.props.className ? " " + this.props.className : "")}>
                {this.props.routes && this.props.routes.map((route, key) =>
                    this.state.history.indexOf(route.props.routeName) > -1 &&
                    <div
                        key={key}
                        className={"Root-route" +
                            (this.state.route && this.state.route === route ? " active" : "")}
                    >
                        {this.props.children}
                        {route}
                    </div>
                )}
            </div>
        );
    }
}

export default Root;