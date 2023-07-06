import { addLike } from './api/addGetLike.js';

const addLikeEvent = async (id, likes) => {
  if (likes) {
    await addLike(id, likes);
  } /* else {
    console.log('OOPS! There is an error here! Cannot give a like');
  } */
};

export { addLikeEvent as default };
