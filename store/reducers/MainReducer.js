import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
import InitialState from './InitialState';

const MainReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PLAY_ID:
      return updateObject(state, {PlayId: action.playId});

    case actionTypes.GET_USERNAME:
      return updateObject(state, {Username: action.username});

    case actionTypes.GET_LIFE:
      return updateObject(state, {Life: action.life});

    case actionTypes.GET_BATTLE_LIFE:
      return updateObject(state, {BattleLife: action.battleLife});

    case actionTypes.GET_STRENGTH:
      return updateObject(state, {Strength: action.strength});

    case actionTypes.GET_BATTLE_STRENGTH:
      return updateObject(state, {BattleStrength: action.battleStrength});

    case actionTypes.GET_BATTLE_MODE:
      return updateObject(state, {BattleMode: action.battleMode});

    case actionTypes.GET_LOCATION:
      return updateObject(state, {Location: action.location});

    case actionTypes.GET_AUTO_BATTLE_MODE:
      return updateObject(state, {AutoBattleMode: action.autoBattleMode});

    case actionTypes.GET_WIN_RATE:
      return updateObject(state, {WinRate: action.winRate});

    case actionTypes.GET_LOST_RATE:
      return updateObject(state, {LostRate: action.lostRate});

    case actionTypes.GET_WORLD_DOMINATION_RANK:
      return updateObject(state, {
        WorldDominationRank: action.worldDominationRank,
      });

    case actionTypes.GET_TEAR:
      return updateObject(state, {Tear: action.tear});

    case actionTypes.GET_BANK:
      return updateObject(state, {Bank: action.bank});

    case actionTypes.GET_TOKEN:
      return updateObject(state, {Token: action.token});

    default:
      return state;
  }
};

export default MainReducer;
