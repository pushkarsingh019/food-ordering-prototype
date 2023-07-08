import { restaurantsData } from "./data";

export const getAverageRating = restaurantId => {
    const ratingsArray = restaurantsData.find(restaurant => restaurant.id === Number(restaurantId)).ratings.map(rating => Number(rating.rating));
  
    if (ratingsArray.length === 0) {
      return 0;
    }
  
    const sum = ratingsArray.reduce((a, b) => a + b);
    const mean = sum / ratingsArray.length;
    return mean.toFixed(2);
  };
