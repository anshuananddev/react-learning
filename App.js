import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
    "h1",
    {
        id: "heading", 
        xyz: "something random", // custom attribute can also be provide
        key: "uniqueKey1" 
    },
    "Hello, world from React!"
);

const smallerHeading = React.createElement(
    "h3",
    {
        id: "smallerHeading",
        key: "uniqueKey2"
    },
    "This is a smaller heading" 
);
const child = React.createElement("div", { id: "child" }, [heading, smallerHeading]);
const parent = React.createElement("div", { id: "parent" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);
root.render(parent);