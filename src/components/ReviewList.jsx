const ReviewList = ({ reviews }) => {
    return (
        <section className="flex flex-col gap-y-4">
            <h3 className="text-xl font-medium">Reviews</h3>
            {reviews.map((review) => {
                return (
                    <div className="flex justify-between items-center w-5/6 shadow-sm px-2 py-1">
                        <div>
                            <div className="flex gap-x-2 items-center">
                                <img
                                    src={review.pp}
                                    alt={review.revName}
                                    className="w-9 h-9 rounded-full"
                                />
                                <p className="font-medium">{review.revName}</p>
                            </div>
                            <p className="mt-2">{review.comment}</p>
                        </div>
                        <div>{review.rating} ⭐️</div>
                    </div>
                );
            })}
        </section>
    );
};

export default ReviewList;
