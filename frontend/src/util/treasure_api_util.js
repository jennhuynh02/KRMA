import axios from 'axios';

// Admin only
export const getTreasures = () => {
    return axios.get(`/api/treasure/all`);
};

export const getUserTreasures = (id) => {
    return axios.get(`api/treasure/users/${id}`);
};

export const getTreasure = (id) => {
    return axios.get(`api/treasure/${id}`);
};

export const destroyTreasure = (treasure) => {
    return axios.delete('api/treasure', treasure)
}

export const postTreasure = (treasure) => (
    axios.post('/api/treasure/upload', treasure, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${treasure._boundary}`,
        }
    })
);