import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/index';
import * as Axios from './Axios';
import * as SignalRHandler from './SignalRHandler';
import * as signalR from '@aspnet/signalr';

const HubPath = 'http://10.0.2.2/';

class Authenticate extends React.Component {
  //const Authenticate: (props) => React$Node = (props) => {
  constructor(props) {
    super(props);
    this.ManageUser();
  }

  ManageUser = async () => {
    const {
      PlayId,
      Token,
      onGetToken,
      Life,
      onGetLife,
      Strength,
      onGetStrength,
      WinRate,
      onGetWinRate,
      LostRate,
      onGetLostRate,
      WorldDominationRank,
      onGetWorldDominationRank,
      Tear,
      onGetTear,
      Bank,
      onGetBank,
    } = this.props;

    //var user = await Axios.SignUp(PlayId);
    const connectionHub = new signalR.HubConnectionBuilder()
      .withUrl(HubPath + 'user', {accessTokenFactory: () => Token})
      .configureLogging(signalR.LogLevel.Debug)
      .build();
    connectionHub
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection', err));

    connectionHub.on('UserHandler', (nick, message) => {
      const text = `${nick}: ${message}`;
      const messages = this.state.messages.concat([text]);
      this.setState({messages});
    });
    setTimeout(async () => {
      await connectionHub
        .invoke('SignInUp', PlayId)
        .then(res => console.log('SENDTOCHANNEL INVOKED!' + res.data));
    }, 3000);

    var User;
    connectionHub.on('UserFill', user => {
      onGetLife(user.life);
      onGetStrength(user.strength);
      onGetWinRate(user.winRate);
      onGetLostRate(user.lostRate);
      onGetWorldDominationRank(user.worldDominationRank);
      onGetTear(user.tear);
      onGetBank(user.bank);
      onGetToken(user.token);
      console.log('!!!!!!!!!!!!! TOKEN !!!!!!!!!!!!!!!! :     ' + Token);
      User = user;
    });
  };

  render() {
    return <View />;
  }
}

const mapStateToProps = state => ({
  AutoBattleMode: state.AutoBattleMode,
  PlayId: state.PlayId,
  FirstName: state.FirstName,
  LastName: state.LastName,
  Life: state.Life,
  BattleLife: state.BattleLife,
  Strength: state.Strength,
  BattleStrength: state.BattleStrength,
  Location: state.Location,
  WinRate: state.WinRate,
  LostRate: state.LostRate,
  WorldDominationRank: state.WorldDominationRank,
  Tear: state.Tear,
  Bank: state.Bank,
  Token: state.Token,
});
const mapDispatchToProps = dispatch => ({
  onGetAutoBattleMode: val => dispatch(actionCreators.getAutoBattleMode(val)),
  onGetFirstName: val => dispatch(actionCreators.getFirstName(val)),
  onGetLastName: val => dispatch(actionCreators.getLastName(val)),
  onGetLife: val => dispatch(actionCreators.getLife(val)),
  onGetBattleLife: val => dispatch(actionCreators.getBattleLife(val)),
  onGetStrength: val => dispatch(actionCreators.getStrength(val)),
  onGetBattleStrength: val => dispatch(actionCreators.getBattleStrength(val)),
  onGetLocation: val => dispatch(actionCreators.getLocation(val)),
  onGetWinRate: val => dispatch(actionCreators.getWinRate(val)),
  onGetLostRate: val => dispatch(actionCreators.getLostRate(val)),
  onGetWorldDominationRank: val =>
    dispatch(actionCreators.getWorldDominationRank(val)),
  onGetTear: val => dispatch(actionCreators.getTear(val)),
  onGetBank: val => dispatch(actionCreators.getBank(val)),
  onGetToken: val => dispatch(actionCreators.getToken(val)),
  onGetPlayId: val => dispatch(actionCreators.getPlayId(val)),
  onGetBattleMode: val => dispatch(actionCreators.getBattleMode(val)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Authenticate);
