import { useContext, useEffect, useState } from "react";
import { data } from "../utils/context";
import close from "../assets/close.svg";

const AddReviewForm = ({ isOpen, toggleIsOpen, restrauntId }) => {
    const { addReview } = useContext(data);
    const closeModal = () => toggleIsOpen(false);
    const [formData, setFormData] = useState({
        rating: 1,
        comment: "",
    });

    const newReviewHandler = (event) => {
        event.preventDefault();
        addReview(restrauntId, formData);
        setFormData({
            rating: 1,
            comment: "",
        });
        toggleIsOpen(false);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
        // eslint-disable-next-line
    }, []);

    return isOpen ? (
        <div className="modal flex justify-center items-center md:fixed md:inset-0">
            <div
                onClick={closeModal}
                className="fixed inset-0 bg-zinc-300 opacity-75 z-50"
            ></div>
            <div className="fixed bottom-0 left-0 right-0 h-max bg-white rounded-t-xl rounded-r-xl shadow-2xl z-[9999] md:w-80 md:px-0 px-12 py-10 md:static md:rounded-lg">
                <form onSubmit={newReviewHandler} className="px-4 relative">
                    <img
                        src={close}
                        alt="close modal"
                        className="w-6 h-6 absolute -top-7 left-1"
                        onClick={() => toggleIsOpen(false)}
                    />
                    <h2 className="text-2xl my-4 font-medium underline">
                        Add Review
                    </h2>
                    <label
                        className="text-sm font-mono font-light"
                        htmlFor="rating"
                    >
                        Rating -- {formData.rating}
                    </label>
                    <br />
                    <input
                        className="accent-rose-500 mb-5"
                        type="range"
                        min={1}
                        max={5}
                        required
                        value={formData.rating}
                        onChange={(e) =>
                            setFormData({ ...formData, rating: e.target.value })
                        }
                    />
                    <br />
                    <label
                        className="text-sm font-mono font-light"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <br />
                    <input
                        required
                        className="px-1.5 py-1 outline-none w-full border-black rounded-md border mt-1 mb-5"
                        type="text"
                        placeholder="Bruce Wayne"
                        value={formData.name ? formData.name : ""}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                name: e.target.value,
                            })
                        }
                    />
                    <br />
                    <label
                        className="text-sm font-mono font-light"
                        htmlFor="comment"
                    >
                        Comment
                    </label>
                    <br />
                    <input
                        required
                        className="px-1.5 py-1 outline-none w-full border-black rounded-md border mt-1 mb-5"
                        type="text"
                        placeholder="loved the food, but..."
                        value={formData.comment}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                comment: e.target.value,
                            })
                        }
                    />
                    <br />
                    <button
                        type="submit"
                        className="w-full mt-1.5 px-2 py-1.5 bg-rose-500 text-white hover:bg-rose-600 rounded-md"
                    >
                        Add Review
                    </button>
                </form>
            </div>
        </div>
    ) : (
        ""
    );
};

export default AddReviewForm;
