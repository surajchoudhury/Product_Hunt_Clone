import React from "react";

const Header = props => {
  return (
    <main className="head">
      <div className="wrapper">
        <div className="header">
          <div className="left_elm">
            <div className="logo_container">
              <img className="logo" src="images/logo.svg" alt="" />
            </div>
            <div className="input_container">
              <span className="search_container">
                <img className="search" src="images/search.png" alt="" />
              </span>
              <input
                className="input_box"
                type="text"
                placeholder="Discover your next favorite thing..."
              ></input>
            </div>
            {["Deals", "Jobs", "Makers", "Radio", "Ship", "..."].map(tag => (
              <p className="header_text">{tag}</p>
            ))}
          </div>
          <div className="right_elm">
            <button className="login_btn">LOG IN</button>
            <button className="signup_btn">SIGN UP</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
