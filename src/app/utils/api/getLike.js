import { commentLikeKey } from './key.js';

/*
 * Function that fetch all 'like' data from 'Involvement API'

 * Description:
  Create a new a request HTTP
  Wait for API response and fetch all 'like' data promise successed
  Return an empty array if promise failed.
*/

const getLike = async () => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${commentLikeKey}/likes`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

export { getLike as default };