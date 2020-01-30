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
        { Location: action.location });

    case actionTypes.GET_AUTO_BATTLE_MODE: return updateObject(state,
        { AutoBattleMode: action.autoBattleMode });

    case actionTypes.GET_WIN_RATE: return updateObject(state,
        { WinRate: action.winRate });

    case actionTypes.GET_LOST_RATE: return updateObject(state,
        { LostRate: action.lostRate });

    case actionTypes.GET_WORLD_DOMINATION_RANK: return updateObject(state,
        { WorldDominationRank: action.worldDominationRank });

    case actionTypes.GET_TEAR: return updateObject(state,
        { Tear: action.tear });

    case actionTypes.GET_BANK: return updateObject(state,
        { Bank: action.bank });

    default: return state;
    }
};

export default MainReducer;
