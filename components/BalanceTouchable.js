import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles';
import * as actionCreators from '../store/actions/index';
import * as signalR from '@aspnet/signalr';

const HubPath = 'http://10.0.2.2/';

const BalanceTouchable: props => React$Node = props => {
  const [counter, setCounter] = useState(1);
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
    onGetBattleMode,
    Location,
  } = props;

  const ManageBalances = async () => {
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
    onGetBattleMode(true);
    setTimeout(() => {
      connectionHub
        .invoke('BattleHandler', {
          PlayId,
          BattleLife,
          BattleStrength,
          BattleMode: true,
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

  const AddLifeToBattle = async () => {
    if (Life > 0) {
      onGetLife(Life - 1);
      onGetBattleLife(BattleLife + 1);
    } else {
      Alert.alert('Please Add More Life!');
    }
    if (counter === 0 || counter % 5 === 0) {
      ManageBalances();
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
    if (counter === 0 || counter % 5 === 0) {
      ManageBalances();
    }
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>The Bank</Text>
      <View style={styles.TouchableView}>
        <TouchableOpacity
          style={styles.greenTouchable}
          onPress={AddLifeToBattle}>
          <View style={[styles.countContainer]}>
            <Text style={[styles.countText]}>{String(Life)}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.redTouchable}
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
  Token: state.Token,
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
