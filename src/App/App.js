// @flow

import React, { Component } from "react";

import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Btn from "../components/Btn/Btn";

import Documentation from "../Documentation/Documentation";

import "./App.css";

type Props = {};

class App extends Component<Props> {
    render() {
        return (
            <div className="App">
                <header className="App-header" style={{ textAlign: "center" }}>
                    <div>Uisum 5</div>
                    <img className="App-logo" alt="Logo" src={require("../images/logo.svg")} />
                </header>

                <Container>
                    <p className="App-intro">
                        Maybe we should use <a href="https://shoelace.style/index.html">Shoelace, go go</a>!
                        <a href="#/">bla</a>
                    </p>

                    <p>
                        Just press <kbd>ctrl + ;</kbd>
                    </p>

                    <div style={{ marginBottom: "1rem" }}>
                        <input type="text" placeholder="And now type something" />
                        {" "}<Btn>And now click</Btn>
                    </div>

                    <Row>
                        <Col breakpoint="md" size={4}>
                            <Btn
                                onClick={(event: Event) => {
                                    let root = document.documentElement;

                                    if (root) {
                                        root.setAttribute("style", "");
                                    }
                                }}
                            >
                                Reset root style
                            </Btn>
                        </Col>

                        <Col breakpoint="md" size={6}>
                            <Btn
                                primary
                                onClick={() => {
                                    let root = document.documentElement;

                                    if (root) {
                                        root.style.setProperty("--primary-stronger", "#b2c2df");
                                        root.style.setProperty("--secondary-stronger", "#e6cccc");

                                        root.style.setProperty("--body-bg", "var(--gray-900)");
                                        root.style.setProperty("--body-color", "var(--gray-100)");

                                        root.style.setProperty("--control-border-color", "var(--gray-600)");
                                        root.style.setProperty("--control-border-color-lighter", "var(--gray-700)");
                                        root.style.setProperty("--control-border-color-stronger", "var(--gray-500)");
                                        root.style.setProperty("--control-bg", "var(--gray-800)");

                                        root.style.setProperty("--btn-bg-stronger", "var(--gray-400)");
                                    }
                                }}
                            >
                                Change to dark theme
                            </Btn>
                        </Col>
                    </Row>

                    <Documentation />
                </Container>
            </div>
        );
    }
}

export default App;
