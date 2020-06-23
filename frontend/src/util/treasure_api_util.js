import axios from 'axios';

// Admin only
export const getTreasures = () => axios.get('/api/treasure/all');

export const getTreasure = (userId) => axios.get(`api/treasure/new/${userId}`);

export const destroyTreasure = (treasureId) => axios.delete(`api/treasure/${treasureId}`);

export const addTreasure = (treasure) => {
  if (treasure.type === 'media') {
    return axios.post('/api/treasure/upload', treasure, {
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${treasure._boundary}`,
      },
    });
  }
  return axios.post('/api/treasure/upload', treasure);
};

// to delete once full update works; need to refactor a little
export const editTreasure = (treasure) => {
  console.log(treasure);
  return (
    axios.put(`/api/treasure/edit/${treasure.id}`, treasure)
  );
};

// full update
export const updateTotalTreasure = (treasure) => (
  axios.put(`/api/treasure/update/${treasure._id}`, treasure)
);

export const getUserTreasures = (userId) => axios.get(`api/treasure/collection/${userId}`);
