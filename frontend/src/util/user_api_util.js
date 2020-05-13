import axios from 'axios';

// moderator only
export const getUsers = () => {
    return axios.get(`/api/users/all`);
};