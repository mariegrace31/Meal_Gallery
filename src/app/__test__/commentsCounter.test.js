import commentsCounter from '../utils/commentsCounter.js';
import { getComments } from '../utils/api/addGetComment.js';

jest.mock('../utils/api/addGetComment', () => ({
  getComments: jest.fn(),
}));

describe('commentsCounter', () => {
  beforeEach(() => {
    getComments.mockReset();
  });

  test('devrait retourner le nombre total de commentaires', async () => {
    const mealID = 123;
    const comments = [
      { id: 1, text: 'Commentaire 1' },
      { id: 2, text: 'Commentaire 2' },
      { id: 3, text: 'Commentaire 3' },
    ];
    getComments.mockResolvedValue(comments);
    const result = await commentsCounter(mealID);
    expect(result).toBe(3);
    expect(getComments).toHaveBeenCalledWith(mealID);
  });

  test('devrait retourner 0 si aucun commentaire n\'est disponible', async () => {
    const mealID = 123;
    getComments.mockResolvedValue([]);
    const result = await commentsCounter(mealID);
    expect(result).toBe(0);
    expect(getComments).toHaveBeenCalledWith(mealID);
  });
});
