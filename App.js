const heading = React.createElement(
    "h1",
    {
        id: "heading", 
        xyz: "something random" // custom attribute can also be provide 
    },
    "Hello, world from React!"
);
const child = React.createElement("div", { id: "child" }, heading);
const parent = React.createElement("div", { id: "parent" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);
root.render(parent);