import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';
import * as Axios from './Axios';

class Authenticate extends React.Component{
//const Authenticate: (props) => React$Node = (props) => {
  constructor(props){
    super(props);
    this.ManageUser();
  }


   ManageUser=async ()=>{
    const { 
  AutoBattleMode, onGetAutoBattleMode,
  PlayId, onGetPlayId,
  FirstName, onGetFirstName,
  LastName, onGetLastName,
  Life, onGetLife,
  BattleLife, onGetBattleLife,
  Strength, onGetStrength,
  BattleStrength, onGetBattleStrength,
  Location, onGetLocation,
  WinRate, onGetWinRate,
  LostRate, onGetLostRate,
  WorldDominationRank, onGetWorldDominationRank,
  Tear, onGetTear,
  Bank, onGetBank,
  BattleMode, onGetBattleMode,
  } = this.props

  var user= await Axios.SignUp(PlayId);
 onGetLife(user.life);
 onGetStrength(user.strength);
 onGetWinRate(user.winRate);
 onGetLostRate(user.lostRate);
 onGetWorldDominationRank(user.worldDominationRank);
 onGetTear(user.tear);
 onGetBank(user.bank);
 onGetBattleMode(user.battleMode);
 onGetAutoBattleMode(user.autoBattleMode);
}

render(){
return ( <View></View>)
  }
}


const mapStateToProps = (state) => ( {
    AutoBattleMode: state.AutoBattleMode,
    PlayId: state.PlayId,
    FirstName: state.FirstName,
    LastName: state.LastName,
    Life:state.Life,
    BattleLife:state.BattleLife,
    Strength: state.Strength,
    BattleStrength: state.BattleStrength,
    Location: state.Location,
    WinRate: state.WinRate,
    LostRate: state.LostRate,
    WorldDominationRank: state.WorldDominationRank,
    Tear: state.Tear,
    Bank: state.Bank,
});
const mapDispatchToProps = (dispatch) => ({
    onGetAutoBattleMode: (val) => dispatch(actionCreators.getAutoBattleMode(val)),
    onGetFirstName: (val) => dispatch(actionCreators.getFirstName(val)),
    onGetLastName: (val) => dispatch(actionCreators.getLastName(val)),
    onGetLife: (val) => dispatch(actionCreators.getLife(val)),
    onGetBattleLife: (val) => dispatch(actionCreators.getBattleLife(val)),
    onGetStrength: (val) => dispatch(actionCreators.getStrength(val)),
    onGetBattleStrength: (val) => dispatch(actionCreators.getBattleStrength(val)),
    onGetLocation: (val) => dispatch(actionCreators.getLocation(val)),
    onGetWinRate: (val) => dispatch(actionCreators.getWinRate(val)),
    onGetLostRate: (val) => dispatch(actionCreators.getLostRate(val)),
    onGetWorldDominationRank: (val) => dispatch(actionCreators.getWorldDominationRank(val)),
    onGetTear: (val) => dispatch(actionCreators.getTear(val)),
    onGetBank: (val) => dispatch(actionCreators.getBank(val)),
    onGetPlayId: (val) => dispatch(actionCreators.getPlayId(val)),
    onGetBattleMode: (val) => dispatch(actionCreators.getBattleMode(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);

