import * as actionTypes from './actionTypes';

export const getplayId = (res) =>
    ({
        type: actionTypes.GET_PLAY_ID,
        playId: res,
    });

export const getusername = (res) =>
    ({
        type: actionTypes.GET_USERNAME,
        username: res,
    });

export const getcoins = (res) =>
    ({
        type: actionTypes.GET_COINS,
        coins: res,
    });

export const getbattleCoins = (res) =>
    ({
        type: actionTypes.GET_BATTLE_COINS,
        battleCoins: res,
    });

export const getbattleMode = (res) =>
    ({
        type: actionTypes.GET_BATTLE_MODE,
        battleMode: res,
    });

export const getlocation = (res) =>
    ({
        type: actionTypes.GET_BATTLE_MODE,
        location: res,
    });

export const getPlayId = (res) => (dispatch) => dispatch(getplayId(res));

export const getUsername = (res) => (dispatch) => dispatch(getusername(res));

export const getCoins = (res) => (dispatch) => dispatch(getcoins(res));

export const getBattleCoins = (res) => (dispatch) => dispatch(getbattleCoins(res));

export const getBattleMode = (res) => (dispatch) => dispatch(getbattleMode(res));

export const getLocation = (res) => (dispatch) => dispatch(getlocation(res));
