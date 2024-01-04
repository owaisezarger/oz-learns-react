import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  //pass children in array
  [
    //child1 and child2 are siblings, both being children of parent
    React.createElement(
      "div",
      { id: "child1" },
      //pass children in array
      [
        //h1 and h2 tags are siblings, both being children of child1
        React.createElement(
          "h1",
          {},
          "Hello, h1 tag using React in a nested div child-1"
        ),
        React.createElement(
          "h2",
          {},
          "Hello, h2 tag using React in a nested div child-1"
        ),
      ]
    ),
    React.createElement(
      "div",
      { id: "child2" },
      //pass children in array
      [
        //h1 and h2 tags are siblings, both being children of child2
        React.createElement("h1", {}, "Hello, Parcel and React"),
        React.createElement("h2", {}, "Hello, h2 tag using parcel cache check"),
      ]
    ),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// root.render(heading);

// Lesson one is complete - Inception
