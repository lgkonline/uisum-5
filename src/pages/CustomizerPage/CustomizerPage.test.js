import React from "react";
import ReactDOM from "react-dom";
import CustomizerPage from "./CustomizerPage";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CustomizerPage />, div);
    ReactDOM.unmountComponentAtNode(div);
});