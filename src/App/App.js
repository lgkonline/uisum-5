// @flow

import React, { Component } from "react";

import Router from "../components/Router/Router";
import ActionMenu from "../components/ActionMenu/ActionMenu";
import MenuItem from "../components/MenuItem/MenuItem";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarController from "../components/SidebarController/SidebarController";
import NavMenu from "../components/NavMenu/NavMenu";

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
            <SidebarController
                className="App"
                in={this.state.sidebarIn}
                onClose={() => this.setState({ sidebarIn: false })}
            >
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
                        <ActionMenu right>
                            <MenuItem
                                href="https://github.com/lgkonline/uisum-5"
                                icon={<span className="icon-github" />}
                                label="GitHub"
                            />
                            <MenuItem
                                href="https://uisum.lgk.io"
                                label="Current stable version"
                            />
                        </ActionMenu>

                        <div className="App-title">
                            <div>Uisum 5</div>
                            <img className="App-logo" alt="Logo" src={require("../images/logo.svg")} />
                        </div>
                    </Header>
                </Router>

                <Sidebar>
                    <NavMenu
                        activeMatchItem={this.state.activeMatchItem}
                        onClickMenuItem={() => {
                            const windowWidth = window.innerWidth || document.documentElement.clientWidth;

                            if (windowWidth < 992) {
                                this.setState({ sidebarIn: false })
                            }
                        }}
                        menuItems={[
                            <MenuItem
                                key={0}
                                className="Sidebar-toggle"
                                onClick={() => this.setState({ sidebarIn: !this.state.sidebarIn })}
                                icon={<span className="icon-menu" />}
                                label="Uisum 5"
                            />,
                            <MenuItem
                                key={1}
                                href="#/home"
                                icon={<span className="icon-home" />}
                                label="Home"
                            />,
                            <MenuItem
                                key={2}
                                href="#/customizer"
                                icon={<span className="icon-droplet" />}
                                label="Customizer"
                            />,
                            <MenuItem
                                key={3}
                                href="#/documentation"
                                icon={<span className="icon-book" />}
                                label="Documentation"
                            />
                        ]}
                    />

                </Sidebar>
            </SidebarController>
        );
    }
}

export default App;
