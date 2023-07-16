import { useContext } from "react";

import Favcontext from "../Store/favourites-context";
import Meetuplist from "../components/meetups/meetuplist";

function FavouritesPage() {
  const favouritesCTX = useContext(Favcontext)

  let content;

  if(favouritesCTX.totalFavourites === 0) {
    content = <p>You've got no favourites yet. Start adding some?</p>
  }else {
    content = <Meetuplist meetups={favouritesCTX.favourites}/>

  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
