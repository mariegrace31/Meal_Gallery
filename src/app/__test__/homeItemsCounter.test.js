import homeItemsCounter from '../utils/homeItemsCounter.js';
import { apiKey } from '../utils/api/key.js';

const mealsData = [
  { id: 1, name: 'Meal 1' },
  { id: 2, name: 'Meal 2' },
  { id: 3, name: 'Meal 3' },
];

global.fetch = jest.fn();

describe('homeItemsCounter', () => {
  it('should return the correct total number of items', async () => {
    const responseJson = { meals: [{}, {}, {}] };

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(responseJson),
    });

    const totalItems = await homeItemsCounter(mealsData);

    expect(fetch).toHaveBeenCalledTimes(3);
    expect(fetch).toHaveBeenCalledWith(
      `https://www.themealdb.com/api/json/v1/${apiKey}/lookup.php?i=1`,
    );
    expect(fetch).toHaveBeenCalledWith(
      `https://www.themealdb.com/api/json/v1/${apiKey}/lookup.php?i=2`,
    );
    expect(fetch).toHaveBeenCalledWith(
      `https://www.themealdb.com/api/json/v1/${apiKey}/lookup.php?i=3`,
    );

    expect(totalItems).toBe(3);
  });
});
