import * as actionTypes from './actionTypes';

export const getlife = res => ({
  type: actionTypes.GET_LIFE,
  life: res,
});

export const getbattleLife = res => ({
  type: actionTypes.GET_BATTLE_LIFE,
  battleLife: res,
});

export const getstrength = res => ({
  type: actionTypes.GET_STRENGTH,
  strength: res,
});

export const getbattleStrength = res => ({
  type: actionTypes.GET_BATTLE_STRENGTH,
  battleStrength: res,
});

export const getbattleMode = res => ({
  type: actionTypes.GET_BATTLE_MODE,
  battleMode: res,
});

export const getlocation = res => ({
  type: actionTypes.GET_LOCATION,
  location: res,
});

export const getplayId = res => ({
  type: actionTypes.GET_PLAY_ID,
  playId: res,
});

export const getusername = res => ({
  type: actionTypes.GET_USERNAME,
  username: res,
});

export const getfirstName = res => ({
  type: actionTypes.GET_FIRST_NAME,
  firstName: res,
});

export const getlastName = res => ({
  type: actionTypes.GET_LAST_NAME,
  lastName: res,
});

export const getwinRate = res => ({
  type: actionTypes.GET_WIN_RATE,
  winRate: res,
});

export const getlostRate = res => ({
  type: actionTypes.GET_LOST_RATE,
  lostRate: res,
});

export const getworldDominationRank = res => ({
  type: actionTypes.GET_WORLD_DOMINATION_RANK,
  worldDominationRank: res,
});

export const gettear = res => ({
  type: actionTypes.GET_TEAR,
  tear: res,
});

export const getbank = res => ({
  type: actionTypes.GET_BANK,
  bank: res,
});

export const gettoken = res => ({
  type: actionTypes.GET_TOKEN,
  token: res,
});

export const getautoBattleMode = res => ({
  type: actionTypes.GET_AUTO_BATTLE_MODE,
  autoBattleMode: res,
});

export const getLife = res => dispatch => dispatch(getlife(res));
export const getBattleLife = res => dispatch => dispatch(getbattleLife(res));
export const getStrength = res => dispatch => dispatch(getstrength(res));
export const getBattleStrength = res => dispatch =>
  dispatch(getbattleStrength(res));
export const getBattleMode = res => dispatch => dispatch(getbattleMode(res));
export const getLocation = res => dispatch => dispatch(getlocation(res));
export const getPlayId = res => dispatch => dispatch(getplayId(res));
export const getUsername = res => dispatch => dispatch(getusername(res));
export const getFirstName = res => dispatch => dispatch(getfirstName(res));
export const getLastName = res => dispatch => dispatch(getlastName(res));
export const getWinRate = res => dispatch => dispatch(getwinRate(res));
export const getLostRate = res => dispatch => dispatch(getlostRate(res));
export const getWorldDominationRank = res => dispatch =>
  dispatch(getworldDominationRank(res));
export const getTear = res => dispatch => dispatch(gettear(res));
export const getBank = res => dispatch => dispatch(getbank(res));
export const getToken = res => dispatch => dispatch(gettoken(res));
export const getAutoBattleMode = res => dispatch =>
  dispatch(getautoBattleMode(res));
