import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Pulse from 'react-native-pulse';
import * as actionCreators from '../store/actions/index';
import styles from '../styles';
import * as Axios from './Axios';
import * as SignalRHandler from './SignalRHandler';
import CurrentLocation from './CurrentLocation';
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
    BattleMode,
    onGetBattleMode,

    Location,
  } = props;

  const BattleModeHandler = async () => {
    //onGetBattleMode(false);
    //onGetCoins(Coins+BattleCoins);
    // onGetBattleCoins(0);
    var user = await SignalRHandler.BattleHandler(
      PlayId,
      BattleLife,
      BattleStrength,
      BattleMode,
      Location,
    );
    //console.log("USER AFTER BATTLE MODE      :" + user)

    //onGetCoins(user.coins);
    //onGetBattleCoins(user.battleCoins);
    // onGetBattleMode(user.battleMode);
  };

  const RemoveLifeFromBattle = async () => {
    if (BattleLife > 0) {
      onGetBattleLife(BattleLife - 1);
      onGetLife(Life + 1);
    } else {
      Alert.alert('No More Battle Life!');
    }
    if (counter == 0 || counter % 5 == 0) {
      var user = await SignalRHandler.BattleHandler(
        PlayId,
        BattleLife,
        BattleStrength,
        BattleMode,
        Location,
      );
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
      var user = await SignalRHandler.BattleHandler(
        PlayId,
        BattleLife,
        BattleStrength,
        BattleMode,
        Location,
      );
    }
    setCounter(counter + 1);
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>The Battle</Text>
      <Text style={styles.sectionDescription} />
      <CurrentLocation />
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
          onPress={RemoveLifeFromBattle}>
          <View style={[styles.countContainer]}>
            <Text style={[styles.countText]}>{String(BattleLife)}</Text>
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
