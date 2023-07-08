import React from "react";

const DishCard = ({ name, imgSrc, price, qty, restrauntName }) => {
    return (
        <section className="flex flex-col px-0 py-5 gap-y-3 rounded-lg shadow-xl">
            <img
                className="w-60 h-60 object-cover text-center rounded-md"
                src={imgSrc}
                alt={name}
            />
            <div className="px-2 flex flex-col gap-y-1.5">
                <h4 className="text-lg font-medium">{name}</h4>
                <p className="text-sm font-medium">
                    ₹{price} for {qty} people
                </p>
                <small className="text-sm font-light">{restrauntName}</small>
            </div>
        </section>
    );
};

export default DishCard;
