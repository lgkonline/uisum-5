// @flow

import React, { Component } from "react";

import Root from "../components/Root/Root";
import ActionMenu from "../components/ActionMenu/ActionMenu";
import MenuItem from "../components/MenuItem/MenuItem";

import HomePage from "../pages/HomePage/HomePage";
import DocumentationPage from "../pages/DocumentationPage/DocumentationPage";

import "./App.css";

type Props = {};

class App extends Component<Props> {
    render() {
        return (
            <Root
                className="App"
                routes={[
                    <HomePage routeName="home" />,
                    <DocumentationPage routeName="documentation" />
                ]}
            >
                <header className="App-header">
                    <ActionMenu right>
                        <MenuItem href="#/home">Home</MenuItem>
                        <MenuItem href="#/documentation">Documentation</MenuItem>
                    </ActionMenu>

                    <div style={{ textAlign: "center", height: "100%" }}>
                        <div>Uisum 5</div>
                        <img className="App-logo" alt="Logo" src={require("../images/logo.svg")} />
                    </div>
                </header>
            </Root>
        );
    }
}

export default App;
