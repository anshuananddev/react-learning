const heading = React.createElement(
    "h1",
    {
        id: "heading", 
        xyz: "something random" // custom attribute can also be provide 
    },
    "Hello, world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);