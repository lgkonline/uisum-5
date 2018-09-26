// @flow

import React from "react";

import "./Router.css";

type State = {
    match?: ?Array<string>,
    route?: any,
    history: Array<string>,
    hash: string
};

type Props = {
    children?: any,
    className?: string,
    onChangeRoute?: (state: State) => void,
    routes?: Array<any>
};

/**
 * This component is the backbone of your application.
 */
class Router extends React.Component<Props, State> {
    defaultMatch = ["home"];

    state = {
        match: null,
        route: null,
        history: [],
        hash: window.location.hash
    };

    componentWillMount() {
        // window.RouterRef = this;

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
        }, () => {
            if (this.props.onChangeRoute) {
                this.props.onChangeRoute(this.state);
            }
        });
    }

    render() {
        return (
            <div
                className={
                    "Router" +
                    (this.props.className ? " " + this.props.className : "")
                }
            >
                {this.props.routes && this.props.routes.map((route, key) =>
                    this.state.history.indexOf(route.props.routeName) > -1 &&
                    <div
                        key={key}
                        className={"Router-route" +
                            (this.state.match && this.state.match[0] === route.props.routeName ? " active" : "")}
                    >
                        {this.props.children}
                        {route}
                    </div>
                )}
            </div>
        );
    }
}

export default Router;