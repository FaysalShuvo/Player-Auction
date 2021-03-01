import React from "react";
import "../../asset/bootstrap.min.css";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center ">
        <div className="container-fluid d-flex justify-content-center">
          <a className="navbar-brand  fw-bold" href="/home">
            Cricket Player Auction
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
