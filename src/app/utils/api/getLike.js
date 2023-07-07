import { apiLikeKey } from './key.js';

/*
 * Function that fetch all 'like' data from 'Involvement API'

 * Description:
  Create a new a request HTTP
  Wait for API response and fetch all 'like' data promise successed
  Return an empty array if promise failed.
*/

const getLike = async () => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiLikeKey}/likes`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur cannot get all "likes" data:', error);
    return [];
  }
};

export { getLike as default };