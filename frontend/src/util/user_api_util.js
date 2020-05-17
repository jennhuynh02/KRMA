import axios from 'axios';

// moderator only
export const getUsers = () => {
    return axios.get(`/api/users/all`);
};

// moderator only
export const deleteUser = (userId) => {
    return axios.delete(`/api/users/${userId}`);
};

export const updateUser = (userId) => {
    return axios.put(`/api/users/${userId}`);
};

// moderator only
export const resetOwners = () => {
    return axios.put('api/users/resetowners')
}