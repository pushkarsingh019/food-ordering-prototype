import React, { useContext } from "react";
import CuisineList from "../components/CuisineList";
import { data } from "../utils/context";
import FoodOptionsList from "../components/FoodOptionsList";

const HomeScreen = () => {
    const { cuisineChoice } = useContext(data);
    return (
        <section className="my-5 mx-3">
            <h1 className="text-3xl font-serif font-medium text-center">
                Food Ordering App
            </h1>
            <h3 className="text-xl font-semibold text-center mb-4 mt-3">
                Select your cuisine :{" "}
            </h3>
            <CuisineList />
            <FoodOptionsList cuisineId={cuisineChoice} />
        </section>
    );
};

export default HomeScreen;
