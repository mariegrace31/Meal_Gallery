import homeItemsCounter from '../utils/homeItemsCounter.js';
import { apiKey } from '../utils/api/key.js';

// Mock array mealsData
const mealsData = [
  { id: 1, name: 'Meal 1' },
  { id: 2, name: 'Meal 2' },
  { id: 3, name: 'Meal 3' },
];

// Fetch function mock to simulate network calls
global.fetch = jest.fn();

// UNIT TESTS
describe('homeItemsCounter', () => {
  it('should return the correct total number of items', async () => {
    // Mock API response
    const responseJson = { meals: [{}, {}, {}] };

    // Fetch function mock to simulate JSON response
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(responseJson),
    });

    // Call homeItemsCounter function with data from mealsData array
    const totalItems = await homeItemsCounter(mealsData);

    // Verify that the fetch function was called with the correct URLs
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

    // Verify that the total number of items returned is correct
    expect(totalItems).toBe(3);
  });
});
