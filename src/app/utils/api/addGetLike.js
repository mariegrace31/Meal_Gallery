import { apiLikeKey } from './key.js';

const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const endPoint = `apps/${apiLikeKey}/likes`;
// Build the request URL by using the base URL and the endPoint
const requestURL = `${baseURL}${endPoint}`;

/*
 * Function that send new 'like' data to 'Involvement API'

 * Description:
  Create a new JSON object that take the meal identifier(mealID) and the number of likes
  Build a request HTTP that send the JSON object to API if promise successed
*/
const addLike = async (id, like) => {
  const newObject = {
    item_id: id,
    likes: like,
  };

  const request = new Request(requestURL, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(newObject),
  });

  await request.text();
};

/*
 * Function that fetch all 'like' data from 'Involvement API'

 * Description:
  Create a new a request HTTP
  Wait for API response and fetch all 'like' data promise successed
*/
const getLike = () => {
  console.log('Not implemented yet!');
  /* try {
    const response = await fetch(requestURL, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  } */
};

export { addLike, getLike };
