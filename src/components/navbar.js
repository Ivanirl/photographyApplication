import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../Resources/Logo=hover.png";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  function hm() {
    const bar = document.querySelector(".NavBar");

    if (activeLink === "home") {
      bar.id = scrolled ? "scrollo" : "";
      console.log('home')
    } else{
      bar.id = scrolled ? "scrolled" : "";
    }

  }

  hm();

  return (
    <div className="NavBar" id="">
      <div className="container">
        <div className="rightboy">
          <div className="logo">
            <img src={Logo} className="logoimage" alt="logo image" />
          </div>
          <ul className="navigation">
            <li>
              <Link
                to="/"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className={
                  activeLink === "About" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("About")}
              >
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Gallery"
                className={
                  activeLink === "Gallery" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Gallery")}
              >
                <span>Gallery</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="getstarted">
          <div className="seperator"></div>
          <button className="getStarted">GET STARTED</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;