/*
// how react element is created

//<h1 id="heading">Hello World! I am Learning React in 2024</h1>

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World! I am Learning React in 2024"
);
*/

//nested div and multiple children/ siblings

/*
<div id="parent">
  <div id="child1">
    <h1>Hello, h1 tag using React in a nested div child-1</h1>
    <h2>Hello, h2 tag using React in a nested div child-1</h2>
  </div>
  <div id="child2">
    <h1>Hello, h1 tag using React in a nested div child-2</h1>
    <h2>Hello, h2 tag using React in a nested div child-2</h2>
  </div>
</div>
*/

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
        React.createElement(
          "h1",
          {},
          "Hello, h1 tag using React in a nested div child-2"
        ),
        React.createElement(
          "h2",
          {},
          "Hello, h2 tag using React in a nested div child-2"
        ),
      ]
    ),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// root.render(heading);

// Lesson one is complete - Inception
