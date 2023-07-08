import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MenuList from "../components/MenuList";
import ReviewList from "../components/ReviewList";
import { data } from "../utils/context";
import AddReviewForm from "../components/AddReviewForm";

const RestrauntScreen = () => {
    const { restrauntId } = useParams();
    const navigate = useNavigate();
    const { getRestrauntById } = useContext(data);
    const restraunt = getRestrauntById(restrauntId);
    const [isOpen, setIsOpen] = useState(false);
    const handleModalState = (toggleState) => setIsOpen(toggleState);
    return (
        <section className="px-20 py-12">
            <AddReviewForm
                isOpen={isOpen}
                toggleIsOpen={handleModalState}
                restrauntId={restraunt.id}
            />
            <span
                onClick={() => navigate(-1)}
                className="text-xl text-black hover:cursor-pointer block"
            >
                ←
            </span>
            <br />
            <div>
                <h1 className="text-4xl mb-5 font-medium">{restraunt.name}</h1>
                <p className="text-md  mb-1">{restraunt.address}</p>
                <p className="text-md  mb-1">{restraunt.phone}</p>
                <p className="text-md  mb-3">
                    Average Rating : {restraunt.averageRating}{" "}
                    <span
                        onClick={() => setIsOpen(true)}
                        className="text-sky-600 underline hover:cursor-pointer mx-3"
                    >
                        Add Review
                    </span>
                </p>
                <hr />
            </div>
            <br />
            <div className="grid grid-cols-2 gap-4">
                <MenuList menu={restraunt.menu} />
                <ReviewList reviews={restraunt.ratings} />
            </div>
        </section>
    );
};

export default RestrauntScreen;
