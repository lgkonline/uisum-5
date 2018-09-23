// @flow

import React from "react";

const data = require("./Documentation.json");

console.log(data);

type Props = {};

class Documentation extends React.Component<Props> {
    render() {
        return (
            <div>
                <h1>Documentation</h1>

                {Object.keys(data).map((componentName, key) => {
                    const comp = data[componentName];
                    return (
                        <article key={key}>
                            <h2 className="page-header">{comp.displayName}</h2>

                            {(comp.description && comp.description !== "") &&
                                <p>{comp.description}</p>
                            }

                            {(comp.props && comp.props !== {}) &&
                                <section>
                                    <h3>Props</h3>

                                    <table className="table-striped" style={{ marginBottom: "1rem" }}>
                                        <thead>
                                            <tr>
                                                <th>Prop name</th>
                                                <th>Type</th>
                                                <th>Required</th>
                                                <th>Default value</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {Object.keys(comp.props).map((propName, key2) => {
                                                const prop = comp.props[propName];
                                                return (
                                                    <tr key={key2}>
                                                        <td>
                                                            <code>{propName}</code>
                                                        </td>
                                                        <td>
                                                            {prop.flowType && prop.flowType.name}
                                                        </td>
                                                        <td>
                                                            {prop.required}
                                                        </td>
                                                        <td>
                                                            {prop.defaultValue &&
                                                                <code>{prop.defaultValue.value}</code>
                                                            }
                                                        </td>
                                                        <td>
                                                            {prop.description}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </section>
                            }
                        </article>
                    );
                }
                )}
            </div>
        );
    }
}

export default Documentation;