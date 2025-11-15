import React from "react";
import ReactDOM from "react-dom/client";

// JSX -> HTML/XML like syntax
// Babel Transpiler -> Transpile JSX to React.createElement() calls - present as part of parcel bundler
const heading = (
  <h1 id="heading" className="headingClass">
    Namaste React 🚗
  </h1>
);
// React Functional Component

const Title = () => <h1> This is a title from a component </h1>;
const HeadingComponent = () => {
  return (
    <>
      <Title />
      <h1> This is a heading from a component </h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
root.render(<HeadingComponent />);
