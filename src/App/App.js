// @flow

import React, { Component } from "react";

import Router from "../components/Router/Router";
import ActionMenu from "../components/ActionMenu/ActionMenu";
import MenuItem from "../components/MenuItem/MenuItem";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarController from "../components/SidebarController/SidebarController";

import HomePage from "../pages/HomePage/HomePage";
import CustomizerPage from "../pages/CustomizerPage/CustomizerPage";
import DocumentationPage from "../pages/DocumentationPage/DocumentationPage";

import "./App.css";

type Props = {};

type State = {
    activeMatchItem: any,
    sidebarIn: boolean
};

class App extends Component<Props, State> {
    state = {
        activeMatchItem: "",
        sidebarIn: false
    };

    render() {
        return (
            <SidebarController className="App" in={this.state.sidebarIn}>
                <Router
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
                    <Header className="App-header">
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
                </Router>

                <Sidebar>
                    <MenuItem
                        onClick={() => this.setState({ sidebarIn: !this.state.sidebarIn })}
                        icon={<span className="icon-menu" />}
                    />
                    <MenuItem
                        href="#/home"
                        active={this.state.activeMatchItem === "home"}
                        icon={<span className="icon-home" />}
                        label="Home"
                    />
                    <MenuItem
                        href="#/customizer"
                        active={this.state.activeMatchItem === "customizer"}
                        icon={<span className="icon-droplet" />}
                        label="Customizer"
                    />
                    <MenuItem
                        href="#/documentation"
                        active={this.state.activeMatchItem === "documentation"}
                        icon={<span className="icon-book" />}
                        label="Documentation"
                    />
                </Sidebar>
            </SidebarController>
        );
    }
}

export default App;
