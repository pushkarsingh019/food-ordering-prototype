import { createContext, useState } from "react";
import { restaurantsData } from "./data";

export const data = createContext();

export const DataProvider = ({children}) => {
    const [cuisineChoice, setCuisineChoice] = useState();
    const store = {
        cuisineChoice,
        updateCuisineChoice : (cuisineId) => setCuisineChoice(cuisineId),
        filterRestrauntsByCuisine : cuisineId => restaurantsData.filter(restraunt => restraunt.cuisine_id === cuisineId),
        getRestrauntById : restrauntId => restaurantsData.find(restraunt => restraunt.id === Number(restrauntId)),
        addReview : (restrauntId, review) => {
            const restrauntToReview = restaurantsData.find(restraunt => restraunt.id === Number(restrauntId));
            restrauntToReview.ratings.push({
                rating : review.rating,
                comment : review.comment,
                revName : review.name,
                pp : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
            });
        }
    };

    return(
        <data.Provider value={store}>
            {children}
        </data.Provider>
    )
};
