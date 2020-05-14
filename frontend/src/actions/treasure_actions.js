import {
	postTreasure,
	getTreasure, 
	getTreasures, 
	getUserTreasures,
	destroyTreasure, 
} from "../util/treasure_api_util"

export const RECEIVE_TREASURE = "RECEIVE_TREASURE";
export const RECEIVE_TREASURES = "RECEIVE_TREASURES";
export const RECEIVE_USER_TREASURES = "RECEIVE_USER_TREASURES";
export const RECEIVE_NEW_TREASURE = "RECEIVE_NEW_TREASURE";
export const REMOVE_TREASURE = "REMOVE_TREASURE";

export const receiveTreasure = treasure => ({
	type: RECEIVE_TREASURE,
	treasure
});

export const receiveTreasures = treasures => ({
	type: RECEIVE_TREASURES,
	treasures
});

// export const receiveUserTreasures = (treasures) => ({
//   type: RECEIVE_USER_TREASURES,
//   treasures,
// });

export const receiveNewTreasure = treasure => ({
	type: RECEIVE_NEW_TREASURE,
	treasure
});

export const removeTreasure = treasureId => ({
	type: REMOVE_TREASURE,
	treasureId
})

export const fetchTreasure = (id) => (dispatch) => (
	getTreasure(id)
		.then(treasure => dispatch(receiveTreasure(treasure)))
		.catch(err => console.log(err))
);

export const fetchTreasures = () => (dispatch) => (
	getTreasures()
		.then(treasures => dispatch(receiveTreasures(treasures)))
		.catch(err => console.log(err))
);

// export const fetchUserTreasures = (currentUser) => (dispatch) => (
// 	getUserTreasures(currentUser)
// 		// .then(res => console.log(res))
// 		.then(treasures => dispatch(receiveUserTreasures(treasures)))
// 		.catch(err => console.log(err))
// );

export const createTreasure = (data) => (dispatch) => (
	postTreasure(data)
		.then(res => dispatch(receiveNewTreasure(res)))
		.catch((error) => console.log(error))
    // .catch((errors) => dispatch(receiveErrors(errors.response.data)))
);

export const deleteTreasure = (treasureId) => (dispatch) => {
		const treasureIdsaved = treasureId;
    return destroyTreasure(treasureId)
        .then((treasureId) => (dispatch(removeTreasure(treasureIdsaved))));
//         .catch(err => console.log(err))
}
