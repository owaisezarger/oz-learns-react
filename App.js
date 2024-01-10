import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1 className="title">This is Title</h1>;
};

const number = 9321;

const Heading = () => {
  return (
    <div>
      <Title />
      {number + number}

      <h2> This is Heading</h2>
      <p>Writing Functional React Components</p>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
