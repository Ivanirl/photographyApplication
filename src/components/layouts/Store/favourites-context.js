import { createContext, useState } from "react";

const Favcontext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourites: (favouriteMeetup)=>{},
    removeFavourites: (meetupId)=>{},
    itemisfavourite: (meetupId)=>{},

});

export function FavouritesContextProvider(props){

    function addFavouritesHandler(favouriteMeetup){
        SetUserFavourites((prevUserFavourites)=>{
            return prevUserFavourites.concat(favouriteMeetup)
        });
    }

    function removeFavouritesHandler(meetupId){
        SetUserFavourites(prevUserFavourites => {
            return prevUserFavourites.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemisfavouriteHandler(){
        return userFavourites.some(meetup => meetup.id === meetupId)
    }



    const [userFavourites, SetUserFavourites] = useState([])
    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourites: addFavouritesHandler,
        removeFavourites: removeFavouritesHandler,
        itemisfavourite: itemisfavouriteHandler
    }

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default Favcontext