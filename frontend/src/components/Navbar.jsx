import React,{useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    const containerRef = useRef(null);

    useEffect(() => {
      const container = containerRef.current;
      const hamburger_menu = container.querySelector(".hamburger-menu");
  
      const handleClick = () => {
        container.classList.toggle("active");
      };
  
      hamburger_menu.addEventListener("click", handleClick);
  
      // Cleanup function to remove the event listener
      return () => {
        hamburger_menu.removeEventListener("click", handleClick);
      };
    }, []);

  return (
    <div>
  <div  ref={containerRef} className="container">
    <div className="navbar">
      <div className="menu">
        <h3 className="logo">
          Mayank<span>Rana</span>
        </h3>
        <div className="hamburger-menu">
          <div className="bar" />
        </div>
      </div>
    </div>
    <div className="main-container">
      <div className="main">
        <header>
          <div className="overlay">
            <div className="inner">
              <h2 className="title">Click on NavBar icon</h2>
              <p>
                In this project I try to make a 3D navbar animation you can
                check it out by clicking on the nav bar icon on ther top right
                corner.
              </p>
              <button className="btn">Read more</button>
            </div>
          </div>
        </header>
      </div>
      <div className="shadow one" />
      <div className="shadow two" />
    </div>

    <div class="links">
        <ul>
          <li>
            <Link to="/Home" style={{ '--i': '0.05s' }}>Home</Link>
          </li>
          <li>
            <Link to="/edit" style={{ '--i': '0.1s' }}>Services</Link>
          </li>
          <li>
            <Link to="/rank" style={{ '--i': '0.15s' }}>Portfolio</Link>
          </li>
          <li>
            <Link to="/rules" style={{ '--i': '0.2s' }}>Testimonials</Link>
          </li>
          <li>
            <Link to="/benefits" style={{ '--i': '0.25s' }}>About</Link>
          </li>
          <li>
            <Link to="/upload" style={{ '--i': '0.3s' }}>Contact</Link>
          </li>
        </ul>
      </div>
  </div>
</div>
  )
}

export default Navbar
