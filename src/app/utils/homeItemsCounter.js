import { apiKey } from './api/key.js';

/*
  This Implementation uses 'Array.prototype.reduce' to iterate over the mealsData array.
  It initializes a resolved promise with the initial value of 0 and
  uses 'async/await' to wait for each API response and update the accumulator (totalItems)
  based on the presence of meals in the response.
  Finally, the promise is resolved with the final value of totalItems.
*/
const homeItemsCounter = async (mealsData) => {
  const url = `https://www.themealdb.com/api/json/v1/${apiKey}/lookup.php?i=`;

  const totalItems = await mealsData.reduce(async (accumulatorPromise, meal) => {
    const accumulator = await accumulatorPromise;
    const requestURL = `${url}${meal.id}`;
    const response = await fetch(requestURL);
    const data = await response.json();
    if (data.meals.length > 0) {
      return accumulator + 1;
    }
    return accumulator;
  }, Promise.resolve(0));

  return totalItems;
};

export default homeItemsCounter;
