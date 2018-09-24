import React from "react";
import ReactDOM from "react-dom";
import ActionMenu from "./ActionMenu";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ActionMenu />, div);
    ReactDOM.unmountComponentAtNode(div);
});