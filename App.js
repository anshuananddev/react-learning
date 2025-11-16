import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/userupload/14683000/file/original-a9a8ef8e6c89a6a25ae297b21245680c.jpg?resize=1024x768&vertical=center"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resName }) => {
  return (
    <div className="res-card">
      <h3>{resName}</h3>
    </div>
  );
};

const resNames = ["Meghna Foods", "KFC"];
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      {resNames.map((name) => {
        return <RestaurantCard key={name} resName={name} />;
      })}
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
