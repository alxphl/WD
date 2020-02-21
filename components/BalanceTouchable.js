import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles';
import * as actionCreators from '../store/actions/index';
import * as SignalRHandler from './SignalRHandler';
import * as signalR from '@aspnet/signalr';

const HubPath = 'http://10.0.2.2/';

const BalanceTouchable: props => React$Node = props => {
  const [counter, setCounter] = useState(0);
  const {
    PlayId,
    Token,
    Life,
    BattleLife,
    onGetLife,
    onGetBattleLife,
    Strength,
    BattleStrength,
    onGetStrength,
    onGetBattleStrength,
    BattleMode,
    onGetBattleMode,
    Location,
  } = props;

  const AddBattleCoins = () => {
    if (Life > 1) {
      onGetBattleLife(BattleLife + 1);
      onGetLife(Life - 1);
      onGetBattleMode(true);
    } else {
      Alert.alert('Please Add More Coins!');
    }
  };

  const ManageBalances = async () => {
    const connectionHub = new signalR.HubConnectionBuilder()
      .withUrl(HubPath + 'battle', {accessTokenFactory: () => Token})
      .configureLogging(signalR.LogLevel.Debug)
      .build();
    connectionHub
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection', err));

    connectionHub.on('BattleHandler', (nick, message) => {
      const text = `${nick}: ${message}`;
      const messages = this.state.messages.concat([text]);
      this.setState({messages});
    });
    setTimeout(() => {
      connectionHub
        .invoke('BattleHandler', {
          PlayId,
          BattleLife,
          BattleStrength,
          BattleMode,
          Location,
        })
        .then(res => console.log('SENDTOCHANNEL INVOKED!' + res.data));
    }, 3000);

    connectionHub.on('BattleStats', user => {
      onGetLife(user.life);
      onGetStrength(user.strength);
      onGetBattleLife(user.battleLife);
      onGetBattleStrength(user.battleStrength);
      onGetWinRate(user.winRate);
      onGetLostRate(user.lostRate);
      onGetWorldDominationRank(user.worldDominationRank);
      onGetTear(user.tear);
      onGetBank(user.bank);
    });
  };

  const AddLifeToBattle = async () => {
    if (Life > 0) {
      onGetLife(Life - 1);
      onGetBattleLife(BattleLife + 1);
    } else {
      Alert.alert('Please Add More Life!');
    }
    if (counter == 0 || counter % 5 == 0) {
      var user = await SignalRHandler.BattleHandler(
        PlayId,
        BattleLife,
        BattleStrength,
        BattleMode,
        Location,
      );
      console.log('USER RETURNED:  ' + user);
    }
    setCounter(counter + 1);
  };

  const AddStrengthToBattle = async () => {
    if (Strength > 0) {
      onGetStrength(Strength - 1);
      onGetBattleStrength(BattleStrength + 1);
    } else {
      Alert.alert('Please Add More Strength!');
    }
    if (counter == 0 || counter % 5 == 0) {
      /* var user = await SignalRHandler.BattleHandler(
        PlayId,
        BattleLife,
        BattleStrength,
        BattleMode,
        Location,
      ).then(res =>
        console.log(
          '!!!!!!!!!!!!!!!!!!!!!!RESPONSEEE!!!!!!!!!!!!!!             ' + res,
        ),

      onGetLife(user.Life);
      onGetBattleLife(user.BattleLife);
      onGetStrength(user.Strength);
      onGetBattleStrength(user.BattleStrength);*/
      ManageBalances();
    }
    //  setCounter(counter + 1);
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>The Bank</Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'rgba(255,0,0,0.2)',
            backgroundColor: 'rgba(255,0,0,0.9)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 100,
            backgroundColor: 'green',
            borderBottomLeftRadius: 50,
            borderTopLeftRadius: 50,

            alignItems: 'center',
          }}
          onPress={AddLifeToBattle}>
          <View style={[styles.countContainer]}>
            <Text style={[styles.countText]}>{String(Life)}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'rgba(255,0,0,0.2)',
            backgroundColor: 'rgba(255,0,0,0.9)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 100,
            backgroundColor: 'red',
            borderBottomRightRadius: 50,
            borderTopRightRadius: 50,
            alignItems: 'center',
          }}
          onPress={AddStrengthToBattle}>
          <View style={[styles.countContainer]}>
            <Text style={[styles.countText]}>{String(Strength)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  PlayId: state.PlayId,
  Life: state.Life,
  BattleLife: state.BattleLife,
  Strength: state.Strength,
  BattleStrength: state.BattleStrength,
  BattleMode: state.BattleMode,
  Location: state.Location,
});

const mapDispatchToProps = dispatch => ({
  onGetLife: val => dispatch(actionCreators.getLife(val)),
  onGetBattleLife: val => dispatch(actionCreators.getBattleLife(val)),
  onGetStrength: val => dispatch(actionCreators.getStrength(val)),
  onGetBattleStrength: val => dispatch(actionCreators.getBattleStrength(val)),
  onGetBattleMode: val => dispatch(actionCreators.getBattleMode(val)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BalanceTouchable);
