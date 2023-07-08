import React, { useContext } from "react";
import { cuisineData } from "../utils/data";
import { data } from "../utils/context";

const CuisineList = () => {
    const { updateCuisineChoice } = useContext(data);
    return (
        <section className="flex justify-center items-center gap-x-4">
            {cuisineData.map((cuisine) => {
                return (
                    <button
                        key={cuisine.id}
                        className="px-3 py-1.5 text-base text-white bg-rose-500 rounded-md hover:bg-rose-600"
                        onClick={() => updateCuisineChoice(cuisine.id)}
                    >
                        {cuisine.name}
                    </button>
                );
            })}
        </section>
    );
};

export default CuisineList;
