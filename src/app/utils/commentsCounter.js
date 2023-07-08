import { getComments } from './api/addGetComment.js';

const commentsCounter = async (mealID) => {
  let totalComments = 0;

  const data = await getComments(mealID);
  if (data) {
    totalComments = data.length;
  }

  return totalComments;
};

export default commentsCounter;
