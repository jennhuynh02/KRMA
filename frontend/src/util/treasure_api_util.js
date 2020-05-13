import axios from 'axios';

// Admin only
export const getTreasures = () => {
    return axios.get(`/api/treasures`);
};

export const getUserTreasures = (id) => {
    return axios.get(`api/treasures/users/${id}`);
};

export const getTreasure = (id) => {
    return axios.get(`api/treasures/${id}`);
};

export const postTreasure = (treasure) => (
    axios.post('/api/treasure/upload', treasure, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${treasure._boundary}`,
        }
    })
);