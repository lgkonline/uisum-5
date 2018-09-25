// @flow

import React from "react";

import Btn from "../components/Btn/Btn";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";

const themes = require("./themes.json");
const properties = require("./properties.json");

window.themes = themes;

type Props = {};

type State = {
    customProperties: Object
};

class Customizer extends React.Component<Props, State> {
    state = {
        customProperties: {}
    };

    componentWillMount() {
        this.receiveCustomProperties();
    }

    initCustomProperties() {
        let root = document.documentElement;

        if (root) {
            // Reset first
            root.setAttribute("style", "");

            Object.keys(this.state.customProperties).forEach(propName => {
                root.style.setProperty(propName, this.state.customProperties[propName]);
            });
        }
    }

    setCustomProperties(customProperties: Object, initCustomProperties: boolean = false) {
        this.setState({ customProperties: customProperties }, () => {
            if (initCustomProperties) {
                this.initCustomProperties();
            }
        });
        localStorage.setItem("customProperties", JSON.stringify(customProperties));
    }

    setCustomProperty(property: string, value: string) {
        let customProperties = this.state.customProperties;
        customProperties[property] = value;

        this.setCustomProperties(customProperties);

        let root = document.documentElement;
        if (root) {
            root.style.setProperty(property, value);
        }
    }

    receiveCustomProperties() {
        const fromStorage = localStorage.getItem("customProperties");
        if (fromStorage) {
            const fromStorageObj = JSON.parse(fromStorage);

            if (fromStorageObj) {
                this.setState({ customProperties: fromStorageObj }, () => {
                    this.initCustomProperties();
                });
            }
        }
    }

    render() {
        return (
            <div>
                <Btn
                    onClick={() => {
                        this.setCustomProperties({}, true);
                    }}
                >
                    {"Reset"}
                </Btn>

                {themes.map((theme, key) =>
                    <Btn
                        key={key}
                        className="ml-1-4 mb-1"
                        onClick={() => {
                            this.setCustomProperties(theme.properties, true);
                        }}
                    >
                        {theme.themeName}
                    </Btn>
                )}

                {properties.map((section, sectionKey) =>
                    <section key={sectionKey}>
                        <h2 className="page-header">{section.sectionTitle}</h2>

                        {section.properties.map((prop, propKey) =>
                            <Row key={propKey}>
                                <div className="col-4" style={{ display: "flex", alignItems: "center" }}>
                                    <label htmlFor={"Customizer-property" + prop.property}>
                                        {prop.property}
                                    </label>
                                </div>
                                <Col size={8}>
                                    <input
                                        id={"Customizer-property" + prop.property}
                                        type="text"
                                        value={this.state.customProperties[prop.property] || ""}
                                        onChange={({ target }) => {
                                            this.setCustomProperty(prop.property, target.value);
                                        }}
                                        onDoubleClick={() => {
                                            // Only set default value on double-click, when field isn't already filled
                                            if (!this.state.customProperties[prop.property]) {
                                                this.setCustomProperty(prop.property, prop.defaultValue);
                                            }
                                        }}
                                        title="Hint: double-click to take the default value"
                                        placeholder={prop.defaultValue}
                                    />
                                </Col>
                            </Row>
                        )}
                    </section>
                )}

                {/*this.state.customProperties.length > 0 && this.state.customProperties.map((prop, key) =>
                    <Row key={key}>
                        <Col size={4}>
                            {prop.property}
                        </Col>
                        <Col size={8}>
                            <input
                                type="text"
                                value={prop.value}
                                onChange={({ target }) => {
                                    prop.value = target.value;
                                    const copy = JSON.parse(JSON.stringify(this.state.customProperties));
                                    this.setState({ customProperties: copy });

                                    let root = document.documentElement;
                                    if (root) {
                                        root.style.setProperty(prop.property, target.value);
                                    }
                                }}
                            />
                        </Col>
                    </Row>
                            )*/}
            </div>
        );
    }
}

export default Customizer;