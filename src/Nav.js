import React, { useState } from 'react';
import './Nav.css';

function Nav() {

    const [sideNavOpen, setSideNavOpen] = useState(false);

    const openNav = () => {
        setSideNavOpen(true);
        document.getElementById("mySidenav").style.width = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      };
    
      const closeNav = () => {
        setSideNavOpen(false);
        document.getElementById("mySidenav").style.width = "0";
        document.body.style.backgroundColor = "white";
      };

  return (
    <>

  <div className="container-fluid bg-dark">
    <div className="row">
      <div className="col-sm-6">
        <div id="mySidenav" className="sidenav col-sm-3">
              <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
              <a href="fi-app\src\Nav.js">Home</a>
              <a href="fi-app\src\Nav.js">About</a>
              <a href="fi-app\src\Nav.js">Services</a>
              <a href="fi-app\src\Login.js">Login/Sign up</a>
          </div>

            <h1>
            <span onClick={openNav}>
            <i class="fa-solid fa-bars fa-fade text-white"></i>
            </span>
            </h1>
            
      </div>

      <div className="col-sm-6 text-center">
      <i className="col-sm-1 fa-solid fa-magnifying-glass fa-shake fa-2xl text-white" ></i>
        <input type="text" className="col-sm-5 search-hover" name="" placeholder="search here..." />
      
      </div>
    </div>       
    </div>
        
    </>
  );
}

export default Nav;