import axios from 'axios';

// Admin only
export const getTreasures = () => {
    return axios.get(`/api/treasures`);
};

export const getUserTreasures = id => {
    return axios.get(`api/treasures/users/${id}`);
};

export const getTreasure = id => {
    return axios.get(`api/treasures/${id}`);
};

export const postTreasure = treasure => {
    return axios.post('api/treasures', treasure);
};

export const destroyTreasure = treasure => {
    return axios.delete('api/treasures', treasure)
}