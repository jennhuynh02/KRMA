import {postTreasure, getTreasure, getTreasures, getUserTreasures} from "../util/treasure_api_util"

export const RECEIVE_TREASURE = "RECEIVE_TREASURE";
export const RECEIVE_TREASURES = "RECEIVE_TREASURES";
export const RECEIVE_USER_TREASURES = "RECEIVE_USER_TREASURES";
export const RECEIVE_NEW_TREASURE = "RECEIVE_NEW_TREASURE";

export const receiveTreasure = treasure => ({
	type: RECEIVE_TREASURE,
	treasure
});

export const receiveTreasures = treasures => ({
	type: RECEIVE_TREASURES,
	treasures
});

export const receiveUserTreasures = treasures => ({
	type: RECEIVE_USER_TREASURES,
	treasures
});

export const receiveNewTreasure = treasure => ({
	type: RECEIVE_NEW_TREASURE,
	treasure
});

export const fetchTreasure = id => dispatch => (
	getTreasure(id)
			.then(treasure => dispatch(receiveTreasure(treasure)))
			.catch(err => console.log(err))
);

export const fetchTreasures = () => dispatch => (
	getTreasures()
			.then(treasures => dispatch(receiveTreasure(treasures)))
			.catch(err => console.log(err))
);

export const fetchUserTreasures = id => dispatch => (
	getUserTreasures(id)
			.then(treasures => dispatch(dispatch(receiveUserTreasures(treasures))))
			.catch(err => console.log(err))
);

export const createTreasure = data => dispatch => (
	postTreasure(data)
			.then(treasure => dispatch(receiveNewTreasure(treasure)))
			.catch(err => console.log(err))
);
