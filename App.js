import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1 className="title">This is Title</h1>;
};

const elem = <p>It is an element</p>;
const Heading = () => {
  return (
    <div>
      <Title />
      <h2> This is Heading</h2>
      <p>Writing Functional React Components</p>
      {elem}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
