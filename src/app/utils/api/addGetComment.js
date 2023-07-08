import { commentLikeKey } from './key.js';

const getComments = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${commentLikeKey}/comments?item_id=${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return [];
  }
};

const addComment = async (id, name, comments) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${commentLikeKey}/comments`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment: comments,
      }),
    });
  const commentData = await getComments(id);
  return commentData;
};

export { addComment, getComments };