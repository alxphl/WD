import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Pulse from 'react-native-pulse';
import * as actionCreators from '../store/actions/index';
import styles from '../styles';
import CurrentLocation from './CurrentLocation';
import * as signalR from '@aspnet/signalr';

const HubPath = 'http://10.0.2.2/';

const BattleModeTouchable: props => React$Node = props => {
  const [counter, setCounter] = useState(0);
  const {
    PlayId,
    Life,
    BattleLife,
    onGetLife,
    onGetBattleLife,
    Strength,
    BattleStrength,
    onGetStrength,
    onGetBattleStrength,
    onGetBattleMode,
    Location,
    Token,
  } = props;

  const ManageBalances = async battleMode => {
    const connectionHub = new signalR.HubConnectionBuilder()
      .withUrl(HubPath + 'battle', {
        accessTokenFactory: () => Token,
      })
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
        .invoke('BattleHandler2', {
          PlayId,
          BattleLife,
          BattleStrength,
          BattleMode: false,
          Location,
        })
        .then(res => console.log('SENDTOCHANNEL INVOKED!' + res.data));
    }, 3000);

    connectionHub.on('BattleFill', user => {
      console.log(user);
      onGetLife(user.life);
      onGetStrength(user.strength);
      onGetBattleLife(user.battleLife);
      onGetBattleStrength(user.battleStrength);
      onGetBattleMode(user.battleMode);
    });
  };

  const RemoveLifeFromBattle = async () => {
    if (BattleLife > 0) {
      onGetBattleLife(BattleLife - 1);
      onGetLife(Life + 1);
    } else {
      Alert.alert('No More Battle Life!');
    }
    if (counter == 0 || counter % 5 == 0) {
      ManageBalances();
    }
    setCounter(counter + 1);
  };

  const RemoveStrengthFromBattle = async () => {
    if (BattleStrength > 0) {
      onGetBattleStrength(BattleStrength - 1);
      onGetStrength(Strength + 1);
    } else {
      Alert.alert('No More Battle Strength!');
    }
    if (counter == 0 || counter % 5 == 0) {
      ManageBalances();
    }
    setCounter(counter + 1);
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>The Battle</Text>
      <Text style={styles.sectionDescription} />
      <CurrentLocation />
      <View style={styles.TouchableView}>
        <TouchableOpacity
          style={styles.greenTouchable}
          onPress={RemoveLifeFromBattle}>
          <View style={[styles.countContainer]}>
            <Text style={[styles.countText]}>{String(BattleLife)}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.redTouchable}
          onPress={RemoveStrengthFromBattle}>
          <View style={[styles.countContainer]}>
            <Text style={[styles.countText]}>{String(BattleStrength)}</Text>
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
  Token: state.Token,
});

const mapDispatchToProps = dispatch => ({
  onGetLife: val => dispatch(actionCreators.getLife(val)),
  onGetBattleLife: val => dispatch(actionCreators.getBattleLife(val)),
  onGetStrength: val => dispatch(actionCreators.getStrength(val)),
  onGetBattleStrength: val => dispatch(actionCreators.getBattleStrength(val)),
  onGetBattleMode: val => dispatch(actionCreators.getBattleMode(val)),
  onGetLocation: val => dispatch(actionCreators.getLocation(val)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BattleModeTouchable);
