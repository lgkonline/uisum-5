// @flow

import React, { Component } from "react";

import Root from "../components/Root/Root";

import HomePage from "../pages/HomePage/HomePage";
import SecondPage from "../pages/SecondPage/SecondPage";

import "./App.css";

type Props = {};

class App extends Component<Props> {
    render() {
        return (
            <Root
                routes={[
                    <HomePage routeName="home" />,
                    <SecondPage routeName="second" />
                ]}
            >
                <header className="App-header" style={{ textAlign: "center" }}>
                    <div>Uisum 5</div>
                    <img className="App-logo" alt="Logo" src={require("../images/logo.svg")} />
                </header>
            </Root>
        );
    }
}

export default App;
