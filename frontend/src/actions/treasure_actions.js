import {
  addTreasure,
  getTreasures,
  getTreasure,
  destroyTreasure,
  getUserTreasures,
  editTreasure,
  updateTotalTreasure,
} from '../util/treasure_api_util';

export const RECEIVE_TREASURE = 'RECEIVE_TREASURE';
export const RECEIVE_TREASURES = 'RECEIVE_TREASURES';
export const RECEIVE_USER_TREASURES = 'RECEIVE_USER_TREASURES';
export const REMOVE_TREASURE = 'REMOVE_TREASURE';

export const receiveTreasure = (treasure) => ({
  type: RECEIVE_TREASURE,
  treasure,
});

export const receiveTreasures = (treasures) => ({
  type: RECEIVE_TREASURES,
  treasures,
});

export const receiveUserTreasures = (treasures) => ({
  type: RECEIVE_USER_TREASURES,
  treasures,
});

export const removeTreasure = (treasureId) => ({
  type: REMOVE_TREASURE,
  treasureId,
});

// for getting 1 treasure out of the treasure chest
export const fetchTreasure = (userId) => (dispatch) => (
  getTreasure(userId)
    .then((treasure) => dispatch(receiveTreasure(treasure)))
    .catch((err) => console.log(err))
);

// for admin to get all treasures
export const fetchTreasures = () => (dispatch) => (
  getTreasures()
    .then((treasures) => dispatch(receiveTreasures(treasures)))
    .catch((err) => console.log(err))
);

export const fetchUserTreasures = (userId) => (dispatch) => (
  getUserTreasures(userId)
    .then((treasures) => dispatch(receiveUserTreasures(treasures)))
    .catch((err) => console.log(err))
);

export const createTreasure = (data) => (dispatch) => (
  addTreasure(data)
    .then((res) => dispatch(receiveTreasure(res)))
    .catch((error) => console.log(error))
);

export const deleteTreasure = (treasureId) => (dispatch) => {
  const treasureIdsaved = treasureId;
  return destroyTreasure(treasureId)
    .then(() => dispatch(removeTreasure(treasureIdsaved)))
    .catch((error) => console.log(error));
};

// to be deleted once full update works
export const updateTreasure = (treasure) => (dispatch) => (
  editTreasure(treasure)
    .then((treasure) => dispatch(receiveTreasure(treasure)))
    .catch((error) => console.log(error))
);

export const updateFullTreasure = (treasure) => (dispatch) => (
  updateTotalTreasure(treasure)
    .then((treasure) => dispatch(receiveTreasure(treasure)))
    .catch((error) => console.log(error))
);
