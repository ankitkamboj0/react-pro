import React from "react";
import ReactDOM  from "react-dom/client";

const H1 = React.createElement("h1",{className:"test"},"h1");
const H2 = React.createElement("h2",{className:"h2"},"h2")
const H3 = React.createElement("h2",{className:"h3"},"h3")

const elem = React.createElement("div",{className:"title"},H1,H2,H3)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(elem)
