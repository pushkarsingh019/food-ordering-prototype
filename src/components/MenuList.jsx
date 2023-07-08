import React from "react";

const MenuList = ({ menu }) => {
    return (
        <section className="flex flex-col gap-y-4">
            <h3 className="text-xl font-medium">Menu</h3>
            {menu.map((dish) => {
                return (
                    <div className="flex flex-wrap justify-between px-2 py-1.5 items-center w-5/6 shadow-md rounded-md">
                        <div className="flex flex-wrap gap-x-3 items-center">
                            <img
                                src={dish.imgSrc}
                                alt={dish.name}
                                className="w-11 object-cover h-11 rounded-md"
                            />
                            <p className="text-base font-medium">{dish.name}</p>
                        </div>
                        <p>₹{dish.price}</p>
                    </div>
                );
            })}
        </section>
    );
};

export default MenuList;
