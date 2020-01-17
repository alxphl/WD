/* eslint-disable import/no-unresolved */
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import InitialState from './InitialState';

const MainReducer = (state = InitialState, action) => {
    switch (action.type) {
    case actionTypes.GET_PLAY_ID: return updateObject(state,
        { PlayId: action.playId });

    case actionTypes.GET_USERNAME: return updateObject(state,
        { Username:action.username });

    case actionTypes.GET_COINS: return updateObject(state,
        { Coins: action.coins });

    case actionTypes.GET_BATTLE_COINS: return updateObject(state,
        { BattleCoins: action.battleCoins });

      case actionTypes.GET_BATTLE_MODE: return updateObject(state,
        { BattleMode: action.battleMode });

      case actionTypes.GET_LOCATION: return updateObject(state,
        { BattleMode: action.location });

    default: return state;
    }
};

export default MainReducer;
