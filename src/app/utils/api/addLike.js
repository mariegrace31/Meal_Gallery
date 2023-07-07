import { apiLikeKey } from './key.js';

/*
 * Function that send new 'like' data to 'Involvement API'

 * Description:
  Create a new JSON object that take the meal identifier(mealID) and the number of likes
  Build a request HTTP that send the JSON object to API if promise successed
*/
const addLike = async (id) => {
  const item1 = id;
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiLikeKey}/likes`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: item1,
      }),
    });
  await response.text();
};

export default addLike;
