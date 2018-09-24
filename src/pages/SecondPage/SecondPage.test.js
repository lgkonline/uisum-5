import React from "react";
import ReactDOM from "react-dom";
import SecondPage from "./SecondPage";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SecondPage />, div);
    ReactDOM.unmountComponentAtNode(div);
});