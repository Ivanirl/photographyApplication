import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../Resources/Logo=hover.png";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuha, setMenuha] = useState(false);

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

  const navy = useNavigate();
  const sign = () => {
    navy("/Signup");
  };

  // const MenuOpen = document.querySelector(".bubble-open");
  const Menu = document.querySelectorAll(".bubble");
  const bubbleNav = document.querySelector("#nav-bubble");



  useEffect(() => {
    const togglemenu = () => {
      if (bubbleNav.className === "closedNav") {
        setMenuha(true);
        console.log("setmenuistrue");
      } else if (bubbleNav.className === "navigation") {
        setMenuha(false);
        console.log("setmenuisfalse");
      }
    };

    Menu.forEach((item) => {
      item.addEventListener("click", togglemenu);
      return () => item.removeEventListener("click", togglemenu);
    })
  }, []);


  return (
    <div className="NavBar" id={scrolled ? "scrollo" : ""}>
      <div className="container">
        <div className="rightboy">
          <div className="logo">
            <Link to="/" onClick={() => onUpdateActiveLink("home")}>
              <img src={Logo} className="logoimage" alt="logo image" />
            </Link>
          </div>
          <svg
            width="49"
            className="bubble"
            id="mens"
            height="16"
            viewBox="0 0 49 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="49" height="3" rx="1.5" fill="#D9D9D9" />
            <rect y="13" width="49" height="3" rx="1.5" fill="#D9D9D9" />
          </svg>

          <ul className={menuha ? "navigation" : "closedNav"} id="nav-bubble">
            <li className="bubble-close">
              <svg
                className="bubble"
                id="womens"
                width="49"
                height="37"
                viewBox="0 0 49 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8.01123"
                  width="49"
                  height="3"
                  rx="1.5"
                  transform="rotate(42.0982 8.01123 0)"
                  fill="#D9D9D9"
                />
                <rect
                  x="6.22681"
                  y="34.8887"
                  width="49"
                  height="3"
                  rx="1.5"
                  transform="rotate(-45.3915 6.22681 34.8887)"
                  fill="#D9D9D9"
                />
              </svg>
            </li>
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
                  activeLink === "Gallery"
                    ? "active navbar-link"
                    : "navbar-link"
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
          <button className="getStarted" onClick={sign}>
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
