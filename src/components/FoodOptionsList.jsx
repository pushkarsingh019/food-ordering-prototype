import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../utils/context";
import DishCard from "./DishCard";

const FoodOptionsList = ({ cuisineId }) => {
    const { filterRestrauntsByCuisine } = useContext(data);
    const restraunts = filterRestrauntsByCuisine(cuisineId);
    const navigate = useNavigate();
    return (
        <section className="text-center">
            <br />
            <br />
            {restraunts.map((restraunt) => {
                return (
                    <section className="mb-10" key={restraunt.id}>
                        <h2
                            onClick={() =>
                                navigate(`/restraunt/${restraunt.id}`)
                            }
                            className="text-xl font-semibold hover:underline hover:cursor-pointer"
                        >
                            Dishes By {restraunt.name}
                        </h2>
                        <div className="flex justify-center flex-wrap gap-x-10 mt-1.5">
                            {restraunt.menu.map((dish) => {
                                return (
                                    <DishCard
                                        name={dish.name}
                                        imgSrc={dish.imgSrc}
                                        price={dish.price}
                                        qty={dish.qty}
                                        restrauntName={restraunt.name}
                                    />
                                );
                            })}
                        </div>
                    </section>
                );
            })}
        </section>
    );
};

export default FoodOptionsList;
