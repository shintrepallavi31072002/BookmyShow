import React from "react";
// import "./CSS/card.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top" >
        <div className="container-fluid">
          {/* <h6 > Show App</h6> */}
      
          <a className="navbar-brand" href="/">ShowApp</a>
            
            <div>
            <ul className="nav justify-content-end">
            <li className="nav-item mx-2">
              <button type="button" class="btn btn-danger">Sign-in</button>
            </li>
          <button
            className="navbar-toggler mx-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          </ul>
          </div>
          
          
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Hey
              </h5>
              
            </div>
           
          </div>
        </div>
      </nav>
    </div>
  );
}
