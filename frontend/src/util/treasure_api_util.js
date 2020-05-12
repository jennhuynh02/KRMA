import axios from 'axios'

// Admin only
export const getTreasures = () => {
    return axios.get(`/api/treasures`);
};

export const getUserTreasures = id => {
    return axios.get(`api/treasures/users/${id}`);
}

export const getTreasure = id => {
    return axios.get(`api/treasures/${id}`)
}

export const createTreasure = treasure => {
    return axios.post('api/treasures', treasure)
}