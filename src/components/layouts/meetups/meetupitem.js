import { useContext } from "react-router-dom";

import Card from "../ui/card";
import classes from "./meetup.module.css";
import { useContext } from "react";
import Favcontext from "../../Store/favourites-context";

function MeetupItem(props) {
  const favouritesCTX = useContext(Favcontext)

  const itemisfavourite = favouritesCTX.itemisfavourite(props.id)
  
  function toggleFavouriteStatusHandler(){
    if(itemisfavourite){
      favouritesCTX.removeFavourites(props.id)
    }else {
      favouritesCTX.addFavourites({
        id: props.id,
        title: props.title,
        description: props.description,
        address: props.address
      })
    }
  }


  return (
    <li className={classes.bigboylist}>
      <Card>
        <div>
          <div className={classes.box} />
        </div>
        <div>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.decription}</p>
        </div>
        <div>
          <button className={classes.actions} onClick={toggleFavouriteStatusHandler}>{itemisfavourite ? 'Remove from favourites' : 'To favourites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
