import React from "react";
import ReactDOM from "react-dom/client";

//JSX is HTML like syntax
const jsxHeading = <h1>JSX</h1>;
// console.log(jsxHeading); returns object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
