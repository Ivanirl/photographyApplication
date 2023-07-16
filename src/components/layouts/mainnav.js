import { useContext } from "react";


import { Link } from "react-router-dom";

import classes from "./mainnav.module.css";
import Favcontext from "../../Store/favourites-context";

function Mainnavigation() {
  const favouritesCTX = useContext(Favcontext)


  return (
    <header className={classes.header}>
      <div className={classes.logo}>Foddie town</div>

      <ul>
        <li>
          <Link to="/" style={{ padding: 5 }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/favourites" style={{ padding: 5 }}>
            Favourites
            <span className={classes.badge}>{favouritesCTX.totalFavourites}</span>
          </Link>
        </li>
        <li>
          <Link to="/new-meetups" style={{ padding: 5 }}>
            New
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Mainnavigation;
