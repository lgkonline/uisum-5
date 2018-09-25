// @flow

import React, { Component } from "react";

import Root from "../components/Root/Root";
import ActionMenu from "../components/ActionMenu/ActionMenu";
import MenuItem from "../components/MenuItem/MenuItem";
import Header from "../components/Header/Header";

import HomePage from "../pages/HomePage/HomePage";
import CustomizerPage from "../pages/CustomizerPage/CustomizerPage";
import DocumentationPage from "../pages/DocumentationPage/DocumentationPage";

import "./App.css";

type Props = {};

type State = {
    activeMatchItem: any
};

class App extends Component<Props, State> {
    state = {
        activeMatchItem: ""
    };

    render() {
        return (
            <Root
                className="App"
                routes={[
                    <HomePage routeName="home" />,
                    <CustomizerPage routeName="customizer" />,
                    <DocumentationPage routeName="documentation" />
                ]}
                onChangeRoute={({ match }) => {
                    if (match && match[0]) {
                        this.setState({ activeMatchItem: match[0] });
                    }
                }}
            >
                <Header className="App-header" sticky>
                    <ActionMenu>
                        <MenuItem href="#/home" active={this.state.activeMatchItem === "home"}>Home</MenuItem>
                        <MenuItem href="#/customizer" active={this.state.activeMatchItem === "customizer"}>Customizer</MenuItem>
                        <MenuItem href="#/documentation" active={this.state.activeMatchItem === "documentation"}>Documentation</MenuItem>
                    </ActionMenu>

                    <div style={{ position: "absolute", right: "var(--spacer)" }}>
                        <MenuItem
                            href="https://github.com/lgkonline/uisum-5"
                            icon={<span className="icon-github" />}
                        />
                    </div>

                    <div className="App-title">
                        <div>Uisum 5</div>
                        <img className="App-logo" alt="Logo" src={require("../images/logo.svg")} />
                    </div>
                </Header>
            </Root>
        );
    }
}

export default App;
