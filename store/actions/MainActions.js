import * as actionTypes from './actionTypes';

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

export const getfirstName = (res) =>
    ({
        type: actionTypes.GET_FIRST_NAME,
        firstName: res,
    });

export const getlastName = (res) =>
    ({
        type: actionTypes.GET_LAST_NAME,
        lastName: res,
    });

export const getwinRate = (res) =>
    ({
        type: actionTypes.GET_WIN_RATE,
        winRate: res,
    });

export const getlostRate = (res) =>
    ({
        type: actionTypes.GET_LOST_RATE,
        lostRate: res,
    });

export const getworldDominationRank = (res) =>
    ({
        type: actionTypes.GET_WORLD_DOMINATION_RANK,
        worldDominationRank: res,
    });

export const gettear = (res) =>
    ({
        type: actionTypes.GET_TEAR,
        tear: res,
    });

export const getbank = (res) =>
    ({
        type: actionTypes.GET_BANK,
        bank: res,
    });

export const getCoins = (res) => (dispatch) => dispatch(getcoins(res));

export const getBattleCoins = (res) => (dispatch) => dispatch(getbattleCoins(res));

export const getBattleMode = (res) => (dispatch) => dispatch(getbattleMode(res));

export const getLocation = (res) => (dispatch) => dispatch(getlocation(res));

export const getPlayId = (res) => (dispatch) => dispatch(getplayId(res));

export const getUsername = (res) => (dispatch) => dispatch(getusername(res));

export const getFirstName = (res) => (dispatch) => dispatch(getfirstName(res));

export const getLastName = (res) => (dispatch) => dispatch(getlastName(res));

export const getWinRate = (res) => (dispatch) => dispatch(getwinRate(res));

export const getLostRate = (res) => (dispatch) => dispatch(getlostRate(res));

export const getWorldDominationRank = (res) => (dispatch) => dispatch(getworldDominationRank(res));

export const getTear = (res) => (dispatch) => dispatch(gettear(res));

export const getBank = (res) => (dispatch) => dispatch(getbank(res));